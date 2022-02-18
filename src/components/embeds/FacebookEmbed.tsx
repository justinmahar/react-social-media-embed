import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const defaultEmbedWidth = 550;
const maxPlaceholderWidth = defaultEmbedWidth;
const defaultPlaceholderHeight = 372;
const borderRadius = 3;

export interface FacebookEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  scriptLoadDisabled?: boolean;
  placeholderImageUrl?: string;
  placeholderProps?: PlaceholderEmbedProps;
}

export const FacebookEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Facebook',
  embedPlaceholder,
  placeholderDisabled,
  scriptLoadDisabled,
  placeholderImageUrl,
  placeholderProps,
  ...divProps
}: FacebookEmbedProps) => {
  const [ready, setReady] = React.useState(false);
  const [processTime, setProcessTime] = React.useState(-1);
  const [show, setShow] = React.useState(true);
  const uuidRef = React.useRef(generateUUID());

  React.useEffect(() => {
    if (show && typeof window !== 'undefined') {
      // https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse/
      (window as any).FB?.XFBML?.parse();
    }
    setProcessTime(Date.now());
  }, [show]);

  // Check for successful embed, mark as ready
  React.useEffect(() => {
    let timeout: any = undefined;
    if (!ready) {
      timeout = setInterval(() => {
        if (typeof document !== 'undefined') {
          const fbPostContainerElement = document.getElementById(uuidRef.current);
          if (fbPostContainerElement) {
            const fbPostElem = fbPostContainerElement.getElementsByClassName('fb-post')[0];
            if (fbPostElem) {
              if (fbPostElem.children.length > 0) {
                setReady(true);
              }
            }
          }
        }
      }, 10);
    }
    return () => clearInterval(timeout);
  }, [ready]);

  React.useEffect(() => {
    if (typeof document !== 'undefined' && typeof window !== 'undefined' && !scriptLoadDisabled) {
      if (!(window as any).FB?.XFBML?.parse) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2`);
        document.head.appendChild(scriptElement);
      }
    }
  }, [scriptLoadDisabled]);

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
      <div id={uuidRef.current} className={classNames(!ready && 'rsme-d-none')}>
        <div
          className="fb-post"
          data-href={url}
          style={{
            width: isPercentageWidth ? '100%' : width ?? defaultEmbedWidth,
            height: isPercentageHeight ? '100%' : height ?? undefined,
          }}
        ></div>
      </div>
      {!ready && !placeholderDisabled && placeholder}
    </div>
  );
};
