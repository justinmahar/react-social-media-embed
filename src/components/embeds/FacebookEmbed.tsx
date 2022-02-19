import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const embedJsScriptSrc = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
const defaultEmbedWidth = 550;
const maxPlaceholderWidth = defaultEmbedWidth;
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

export interface FacebookEmbedProps extends DivProps {
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
  debug?: boolean;
}

export const FacebookEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Facebook',
  placeholderImageUrl,
  placeholderProps,
  embedPlaceholder,
  placeholderDisabled = false,
  scriptLoadDisabled = false,
  retryDelay = 5000,
  retryDisabled = false,
  debug,
  ...divProps
}: FacebookEmbedProps) => {
  const [stage, setStage] = React.useState(CHECK_SCRIPT_STAGE);
  const embedSuccess = React.useMemo(() => stage === EMBED_SUCCESS_STAGE, [stage]);
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
      if (win?.FB?.XFBML?.parse) {
        setStage(PROCESS_EMBED_STAGE);
      } else if (!scriptLoadDisabled) {
        setStage(LOAD_SCRIPT_STAGE);
      } else {
        console.error('Facebook embed script not found. Unable to process Facebook embed:', url);
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
        if (win?.FB?.XFBML?.parse) {
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
      const parse = win?.FB?.XFBML?.parse;
      if (parse) {
        parse();
        setStage(CONFIRM_EMBED_SUCCESS_STAGE);
      } else {
        console.error('Facebook embed script not found. Unable to process Facebook embed:', url);
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
          const fbPostContainerElement = document.getElementById(uuidRef.current);
          if (fbPostContainerElement) {
            const fbPostElem = fbPostContainerElement.getElementsByClassName('fb-post')[0];
            if (fbPostElem) {
              if (fbPostElem.children.length > 0) {
                setStage(EMBED_SUCCESS_STAGE);
              }
            }
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
  }, [retryDisabled, retryDelay, stage]);

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

  const isPercentageWidth = !!width?.toString().includes('%');
  const isPercentageHeight = !!height?.toString().includes('%');

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    maxWidth: isPercentageWidth ? undefined : maxPlaceholderWidth,
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
      url={url}
      imageUrl={placeholderImageUrl}
      linkText={linkText}
      {...placeholderProps}
      style={{ ...placeholderStyle, ...placeholderProps?.style }}
    />
  );
  // === END Placeholder ===

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-facebook-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        borderRadius,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <div id={uuidRef.current} className={classNames(!embedSuccess && 'rsme-d-none')}>
        <div
          key={embedContainerKey}
          className="fb-post"
          data-href={url}
          style={{
            width: isPercentageWidth ? '100%' : width ?? defaultEmbedWidth,
            height: isPercentageHeight ? '100%' : height ?? undefined,
          }}
        ></div>
      </div>
      {!embedSuccess && !placeholderDisabled && placeholder}
    </div>
  );
};
