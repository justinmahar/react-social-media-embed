import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { InstagramPlaceholder } from '../placeholders/InstagramPlaceholder';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const defaultIgVersion = '14';
const defaultLinkText = 'View this post on Instagram';
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 1000;
const defaultRetryBackoffMaxDelay = 30000;

let embedScriptLoaded = false;

export interface InstagramEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  igVersion?: string;
  linkText?: string;
  processDelay?: number;
  scriptLoadDisabled?: boolean;
  retryDisabled?: boolean;
  retryInitialDelay?: number;
  retryBackoffMaxDelay?: number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
}

export const InstagramEmbed = ({
  url,
  igVersion = defaultIgVersion,
  linkText = defaultLinkText,
  processDelay = defaultProcessDelay,
  scriptLoadDisabled = false,
  retryDisabled = false,
  retryInitialDelay = defaultRetryInitialDelay,
  retryBackoffMaxDelay = defaultRetryBackoffMaxDelay,
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  ...divProps
}: InstagramEmbedProps): JSX.Element => {
  const [initialized, setInitialized] = React.useState(false);
  const [processTime, setProcessTime] = React.useState(-1);
  const [retryDelay, setRetryDelay] = React.useState(retryInitialDelay);
  const [retrying, setRetrying] = React.useState(false);
  const [retryTime, setRetryTime] = React.useState(-1);
  const uuidRef = React.useRef(generateUUID());
  React.useEffect(() => {
    const win = typeof window !== 'undefined' ? (window as any) : undefined;
    if (win && processTime >= 0) {
      // This call will use the IG embed script to process all elements with the `instagram-media` class name.
      if (typeof win.instgrm !== 'undefined' && win.instgrm.Embeds) {
        win.instgrm.Embeds.process();
      } else {
        console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
      }
    }
  }, [processTime, url]);

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
          setProcessTime(Date.now());
          setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
          setRetryTime(Date.now());
          setRetrying(true);
        }
      }, Math.max(0, retryDelay));
    }

    return () => clearTimeout(timeout);
  }, [initialized, retryBackoffMaxDelay, retryDelay, retryDisabled, retryTime]);

  React.useEffect(() => {
    if (typeof document !== 'undefined' && !scriptLoadDisabled && !embedScriptLoaded) {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      if (!win.instgrm?.Embeds) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', '//www.instagram.com/embed.js');
        document.head.appendChild(scriptElement);
      }
      embedScriptLoaded = true;
    }
  }, [scriptLoadDisabled]);

  const urlWithNoQuery = url.replace(/[?].*$/, '');
  const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;

  const placeholder = embedPlaceholder ?? (
    <InstagramPlaceholder
      url={cleanUrlWithEndingSlash}
      id={uuidRef.current}
      linkText={linkText}
      imageUrl={placeholderImageUrl}
    />
  );

  return (
    <div
      className={classNames('rsme-embed rsme-instagram-embed', divProps.className)}
      style={{ overflow: 'hidden', ...divProps.style }}
      key={`${uuidRef}-${retryTime}`}
    >
      <EmbedStyle />
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version={igVersion}
        style={{
          margin: 0,
          maxWidth: '540px',
          minWidth: '326px',
          width: 'calc(100% - 2px)',
        }}
      >
        {!placeholderDisabled && placeholder}
        <div className="instagram-media-pre-embed rsme-d-none">&nbsp;</div>
      </blockquote>
    </div>
  );
};
