import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { Subs } from 'react-sub-unsub';

import { useFrame, Frame } from '../hooks/useFrame';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const embedJsScriptSrc = 'https://embed.bsky.app/static/embed.js';
const minPlaceholderWidth = 325;
const maxPlaceholderWidth = 600;
const defaultPlaceholderHeight = 200;

// Embed Stages
const PROCESS_EMBED_STAGE = 'process-embed';
const CONFIRM_EMBED_SUCCESS_STAGE = 'confirm-embed-success';
const RETRYING_STAGE = 'retrying';
const EMBED_SUCCESS_STAGE = 'embed-success';

export interface BlueskyEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  placeholderImageUrl?: string;
  placeholderSpinner?: React.ReactNode;
  placeholderSpinnerDisabled?: boolean;
  placeholderProps?: PlaceholderEmbedProps;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  scriptLoadDisabled?: boolean;
  retryDelay?: number;
  retryDisabled?: boolean;
  frame?: Frame;
  debug?: boolean;
}

export const BlueskyEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Bluesky',
  placeholderImageUrl,
  placeholderSpinner,
  placeholderSpinnerDisabled = false,
  placeholderProps,
  embedPlaceholder,
  placeholderDisabled = false,
  scriptLoadDisabled = false,
  retryDelay = 5000,
  retryDisabled = false,
  frame = undefined,
  debug = false,
  ...divProps
}: BlueskyEmbedProps): JSX.Element => {
  const [stage, setStage] = React.useState(PROCESS_EMBED_STAGE);
  const uuidRef = React.useRef(generateUUID());
  const [processTime, setProcessTime] = React.useState(Date.now());
  const embedContainerKey = React.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
  const frm = useFrame(frame);

  // === === === === === === === === === === === === === === === === === === ===
  // Embed Stages
  // === === === === === === === === === === === === === === === === === === ===

  // Process Embed Stage
  React.useEffect(() => {
    if (stage === PROCESS_EMBED_STAGE) {
      if (frm.document && !scriptLoadDisabled) {
        const scriptId = `bluesky-embed-script`;
        const prevScript = frm.document.getElementById(scriptId);
        if (prevScript) {
          prevScript.remove();
        }
        const scriptElement = frm.document.createElement('script');
        scriptElement.setAttribute('src', `${embedJsScriptSrc}?t=${Date.now()}`);
        scriptElement.setAttribute('id', scriptId);
        frm.document.head.appendChild(scriptElement);
        setStage(CONFIRM_EMBED_SUCCESS_STAGE);
      }
    }
  }, [scriptLoadDisabled, stage, frm.document]);

  // Confirm Embed Success Stage
  React.useEffect(() => {
    const subs = new Subs();
    if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
      subs.setInterval(() => {
        if (frm.document) {
          const preEmbedElement = frm.document.getElementById(uuidRef.current);
          if (!preEmbedElement) {
            setStage(EMBED_SUCCESS_STAGE);
          }
        }
      }, 1);
      if (!retryDisabled) {
        subs.setTimeout(() => {
          setStage(RETRYING_STAGE);
        }, retryDelay);
      }
    }
    return subs.createCleanup();
  }, [retryDelay, retryDisabled, stage, frm.document]);

  // Retrying Stage
  React.useEffect(() => {
    if (stage === RETRYING_STAGE) {
      // This forces the embed container to remount
      setProcessTime(Date.now());
      setStage(PROCESS_EMBED_STAGE);
    }
  }, [stage]);

  // END Embed Stages
  // === === === === === === === === === === === === === === === === === === ===

  const [blueskyAtPath, setBlueskyAtPath] = React.useState(url);
  React.useEffect(() => {
    // Already is a at path can skip it
    if (blueskyAtPath.startsWith('at://')) return;

    // Format: https://bsky.app/profile/did:plc:5xq3gcxbqkk7od3vudn2bchr/post/3lbgd6xucfs2y?ref_src=embed
    const urlParameter = new URL(url);
    const [profile, didOrHandle, type, rkey] = urlParameter.pathname.slice(1).split('/');

    if (didOrHandle.startsWith('did:')) {
      setBlueskyAtPath(`at://${didOrHandle}/app.bsky.feed.post/${rkey}`);
      return;
    }

    const run = async () => {
      const resolution = await fetch(
        `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${didOrHandle}`,
      ).then(
        (res) =>
          res.json() as Promise<{
            did: string;
            [k: string]: unknown;
          }>,
      );

      setBlueskyAtPath(`at://${resolution.did}/app.bsky.feed.post/${rkey}`);
    };
    void run();
  }, [url]);

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    minWidth: minPlaceholderWidth,
    maxWidth: maxPlaceholderWidth,
    width: typeof width !== 'undefined' ? width : '100%',
    height:
      typeof height !== 'undefined'
        ? height
        : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
          ? '100%'
          : defaultPlaceholderHeight,
    border: 'solid 1px rgba(22,24,35,0.12)',
    display: 'block',
  };

  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed
      url={url}
      imageUrl={placeholderImageUrl}
      linkText={linkText}
      spinner={placeholderSpinner}
      spinnerDisabled={placeholderSpinnerDisabled}
      {...placeholderProps}
      style={{ ...placeholderStyle, ...placeholderProps?.style }}
    />
  );
  // === END Placeholder ===

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-bluesky-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <div className="bluesky-embed-container">
        <blockquote key={embedContainerKey} className="bluesky-embed" data-bluesky-uri={blueskyAtPath}>
          {!placeholderDisabled ? (
            <div id={uuidRef.current}>{placeholder}</div>
          ) : (
            <div id={uuidRef.current} style={{ display: 'none' }}>
              &nbsp;
            </div>
          )}
        </blockquote>
      </div>
    </div>
  );
};
