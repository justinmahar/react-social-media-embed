import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DivProps } from 'react-html-props';
import { EmbedPlaceholder } from '../..';
import '../rsme.css';
import { generateUUID } from '../uuid';

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
    <EmbedPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? 325,
        height: divProps.style?.height ? '100%' : height ?? 500,
        minWidth: 325,
        minHeight: 500,
        borderColor: divProps.style?.borderColor ?? 'rgba(22,24,35,0.12)',
        borderRadius: divProps.style?.borderRadius ?? 8,
      }}
    />
  );

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-tiktok-embed', divProps.className)}
      style={{ overflow: 'hidden', maxWidth: 325, ...divProps.style }}
    >
      <div className={classNames('tiktok-embed-container', divProps.className)} key={`${uuidRef}-${retryTime}`}>
        {!scriptLoadDisabled && (
          <Helmet key={`tt-embed-${processTime}`}>
            {<script src={`https://www.tiktok.com/embed.js?t=${processTime}`}></script>}
          </Helmet>
        )}
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
