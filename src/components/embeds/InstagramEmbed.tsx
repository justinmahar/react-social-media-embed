import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

let embedScriptLoaded = false;

const minPlaceholderWidth = 328;
const defaultPlaceholderHeight = 372;
const borderRadius = 3;

export interface InstagramEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  igVersion?: string;
  processDelay?: number;
  scriptLoadDisabled?: boolean;
  retryDisabled?: boolean;
  retryInitialDelay?: number;
  retryBackoffMaxDelay?: number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
  placeholderProps?: PlaceholderEmbedProps;
}

export const InstagramEmbed = ({
  url,
  igVersion = '14',
  width,
  height,
  linkText = 'View post on Instagram',
  processDelay = 100,
  scriptLoadDisabled = false,
  retryDisabled = false,
  retryInitialDelay = 1000,
  retryBackoffMaxDelay = 5000,
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  placeholderProps,
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
      if (win.instgrm?.Embeds?.process) {
        // See "Embed JS" section of: https://developers.facebook.com/docs/instagram/oembed/
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
      key={`${uuidRef}-${retryTime}`}
    >
      <EmbedStyle />
      <blockquote
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
