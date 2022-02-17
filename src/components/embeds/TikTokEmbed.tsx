import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { EmbedPlaceholder } from '../..';
import { EmbedStyle } from './EmbedStyle';

import { generateUUID } from '../uuid';
import { TikTokPlaceholder } from '../placeholders/TikTokPlaceholder';

// DOCS: https://developers.tiktok.com/doc/embed-videos

const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 3000;
const defaultRetryBackoffMaxDelay = 30000;
export interface TikTokEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
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
  embedPlaceholder,
  placeholderDisabled,
  processDelay = defaultProcessDelay,
  scriptLoadDisabled = false,
  retryDisabled = false,
  retryInitialDelay = defaultRetryInitialDelay,
  retryBackoffMaxDelay = defaultRetryBackoffMaxDelay,
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

  const placeholder = embedPlaceholder ?? (
    <TikTokPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? 325,
        height: divProps.style?.height ? '100%' : height ?? 500,
        minWidth: 325,
        maxWidth: 480,
      }}
      imageUrl={placeholderImageUrl}
    />
  );

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
