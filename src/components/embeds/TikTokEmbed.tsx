import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

// DOCS: https://developers.tiktok.com/doc/embed-videos

const minPlaceholderWidth = 325;
const maxPlaceholderWidth = 480;
const defaultPlaceholderHeight = 550;

export interface TikTokEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  processDelay?: number;
  scriptLoadDisabled?: boolean;
  retryDisabled?: boolean;
  retryInitialDelay?: number;
  retryBackoffMaxDelay?: number;
  placeholderImageUrl?: string;
}

export const TikTokEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on TikTok',
  embedPlaceholder,
  placeholderDisabled,
  processDelay = 100,
  scriptLoadDisabled = false,
  retryDisabled = false,
  retryInitialDelay = 3000,
  retryBackoffMaxDelay = 30000,
  placeholderImageUrl,
  ...divProps
}: TikTokEmbedProps): JSX.Element => {
  // Format: https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1
  const embedId = url.replace(/[?].*$/, '').replace(/^.+\//, '');
  // console.log(embedId);

  const urlStripped = url.replace(/[?].*/, '');

  const [initialized, setInitialized] = React.useState(false);
  const [processTime, setProcessTime] = React.useState(-1);
  const [retryDelay, setRetryDelay] = React.useState(retryInitialDelay);
  const [retrying, setRetrying] = React.useState(false);
  const [retryTime, setRetryTime] = React.useState(-1);
  const uuidRef = React.useRef(generateUUID());

  // Initialization
  React.useEffect(() => {
    const timeout: any = undefined;
    if (!initialized) {
      if (typeof processDelay !== 'undefined' && processDelay > 0) {
        setTimeout(() => {
          setProcessTime(Date.now());
          setInitialized(true);
        }, Math.max(0, processDelay));
      } else if (processDelay === 0) {
        setProcessTime(Date.now());
        setInitialized(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [initialized, processDelay]);

  // Exponential backoff retry
  React.useEffect(() => {
    let timeout: any = undefined;
    if (initialized && !retryDisabled && typeof document !== 'undefined') {
      timeout = setTimeout(() => {
        const preEmbedElement = document.getElementById(uuidRef.current);
        if (!!preEmbedElement) {
          console.warn('Pre-embed element found. Retrying...');
          setProcessTime(Date.now());
          setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
          setRetryTime(Date.now());
          setRetrying(true);
        }
      }, Math.max(0, retryDelay));
    }

    return () => clearTimeout(timeout);
  }, [initialized, retryBackoffMaxDelay, retryDelay, retryDisabled, retryTime]);

  const urlWithNoQuery = url.replace(/[?].*$/, '');
  const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;

  React.useEffect(() => {
    if (typeof document !== 'undefined' && !scriptLoadDisabled) {
      const scriptId = `tiktok-embed-script`;
      const prevScript = document.getElementById(scriptId);
      if (prevScript) {
        prevScript.remove();
      }
      const scriptElement = document.createElement('script');
      scriptElement.setAttribute('src', `https://www.tiktok.com/embed.js?t=${Date.now()}`);
      scriptElement.setAttribute('id', scriptId);
      document.head.appendChild(scriptElement);
    }
  }, [scriptLoadDisabled]);

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
    borderRadius: 8,
  };
  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed url={url} style={placeholderStyle} imageUrl={placeholderImageUrl} linkText={linkText} />
  );
  // === END Placeholder ===

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-tiktok-embed', divProps.className)}
      style={{ overflow: 'hidden', ...divProps.style }}
    >
      <EmbedStyle />
      <div className={classNames('tiktok-embed-container', divProps.className)} key={`${uuidRef}-${retryTime}`}>
        <blockquote className="tiktok-embed" cite={url} data-video-id={embedId}>
          {!placeholderDisabled ? (
            <div id={uuidRef.current} style={{ display: 'flex', justifyContent: 'center' }}>
              {placeholder}
            </div>
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
