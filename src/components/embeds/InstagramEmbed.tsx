import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const embedJsScriptSrc = '//www.instagram.com/embed.js';
const minPlaceholderWidth = 328;
const defaultPlaceholderHeight = 372;
const borderRadius = 3;

// Embed Stages
const CHECK_SCRIPT_STAGE = 'check-script';
const LOAD_SCRIPT_STAGE = 'load-script';
const CONFIRM_SCRIPT_LOADED_STAGE = 'confirm-script-loaded';
const PROCESS_EMBED_STAGE = 'process-embed';
const CONFIRM_EMBED_SUCCESS_STAGE = 'confirm-embed-success';
const RETRYING_STAGE = 'retrying';
const EMBED_SUCCESS_STAGE = 'embed-success';

export interface InstagramEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  placeholderImageUrl?: string;
  placeholderProps?: PlaceholderEmbedProps;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  scriptLoadDisabled?: boolean;
  retryDelay?: number;
  retryDisabled?: boolean;
  igVersion?: string;
  debug?: boolean;
}

export const InstagramEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Instagram',
  placeholderImageUrl,
  placeholderProps,
  embedPlaceholder,
  placeholderDisabled = false,
  scriptLoadDisabled = false,
  retryDelay = 5000,
  retryDisabled = false,
  igVersion = '14',
  debug,
  ...divProps
}: InstagramEmbedProps): JSX.Element => {
  const [stage, setStage] = React.useState(CHECK_SCRIPT_STAGE);
  const uuidRef = React.useRef(generateUUID());
  const [processTime, setProcessTime] = React.useState(Date.now());
  const embedContainerKey = React.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);

  // Debug Output
  React.useEffect(() => {
    debug && console.log(`[${new Date().toISOString()}]: ${stage}`);
  }, [debug, stage]);

  // === === === === === === === === === === === === === === === === === === ===
  // Embed Stages
  // === === === === === === === === === === === === === === === === === === ===

  // Check Script Stage
  React.useEffect(() => {
    if (stage === CHECK_SCRIPT_STAGE) {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      if (win.instgrm?.Embeds?.process) {
        setStage(PROCESS_EMBED_STAGE);
      } else if (!scriptLoadDisabled) {
        setStage(LOAD_SCRIPT_STAGE);
      } else {
        console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
      }
    }
  }, [scriptLoadDisabled, stage, url]);

  // Load Script Stage
  React.useEffect(() => {
    if (stage === LOAD_SCRIPT_STAGE) {
      if (typeof document !== 'undefined') {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', embedJsScriptSrc);
        document.head.appendChild(scriptElement);
        setStage(CONFIRM_SCRIPT_LOADED_STAGE);
      }
    }
  }, [stage]);

  // Confirm Script Loaded Stage
  React.useEffect(() => {
    let interval: any = undefined;
    if (stage === CONFIRM_SCRIPT_LOADED_STAGE) {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      interval = setInterval(() => {
        if (win.instgrm?.Embeds?.process) {
          setStage(PROCESS_EMBED_STAGE);
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [stage]);

  // Process Embed Stage
  React.useEffect(() => {
    if (stage === PROCESS_EMBED_STAGE) {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      const process = win.instgrm?.Embeds?.process;
      if (process) {
        process();
        setStage(CONFIRM_EMBED_SUCCESS_STAGE);
      } else {
        console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
      }
    }
  }, [stage, url]);

  // Confirm Embed Success Stage
  React.useEffect(() => {
    let confirmInterval: any = undefined;
    let retryTimeout: any = undefined;
    if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
      confirmInterval = setInterval(() => {
        if (typeof document !== 'undefined') {
          const preEmbedElement = document.getElementById(uuidRef.current);
          if (!preEmbedElement) {
            setStage(EMBED_SUCCESS_STAGE);
          }
        }
      }, 1);
      if (!retryDisabled) {
        retryTimeout = setTimeout(() => {
          setStage(RETRYING_STAGE);
        }, retryDelay);
      }
    }
    return () => {
      clearInterval(confirmInterval);
      clearTimeout(retryTimeout);
    };
  }, [retryDelay, retryDisabled, stage]);

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

  const urlWithNoQuery = url.replace(/[?].*$/, '');
  const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;

  const isPercentageWidth = !!width?.toString().includes('%');
  const isPercentageHeight = !!height?.toString().includes('%');

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    minWidth: isPercentageWidth ? undefined : minPlaceholderWidth,
    width: typeof width !== 'undefined' ? (isPercentageWidth ? '100%' : width) : '100%',
    height: isPercentageHeight
      ? '100%'
      : typeof height !== 'undefined'
      ? height
      : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
      ? '100%'
      : defaultPlaceholderHeight,
    border: '1px solid #dee2e6',
    borderRadius,
  };
  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed
      url={cleanUrlWithEndingSlash}
      id={uuidRef.current}
      linkText={linkText}
      imageUrl={placeholderImageUrl}
      {...placeholderProps}
      style={{ ...placeholderStyle, ...placeholderProps?.style }}
    />
  );
  // === END Placeholder ===

  return (
    <div
      className={classNames('rsme-embed rsme-instagram-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        borderRadius,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <blockquote
        key={embedContainerKey}
        className="instagram-media"
        data-instgrm-permalink={`${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version={igVersion}
        style={{
          width: 'calc(100% - 2px)',
        }}
      >
        {!placeholderDisabled && placeholder}
        <div className="instagram-media-pre-embed rsme-d-none">&nbsp;</div>
      </blockquote>
    </div>
  );
};
