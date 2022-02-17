import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

export interface FacebookEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  scriptLoadDisabled?: boolean;
  placeholderImageUrl?: string;
}

// https://developers.facebook.com/docs/plugins/embedded-posts/?prefill_href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2F451971596293956#code-generator

export const FacebookEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Facebook',
  embedPlaceholder,
  placeholderDisabled,
  scriptLoadDisabled,
  placeholderImageUrl,
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

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    maxWidth: 550,
    width: typeof width !== 'undefined' ? width : '100%',
    height:
      typeof height !== 'undefined'
        ? height
        : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
        ? '100%'
        : 372,
    border: '1px solid #dee2e6',
    borderRadius: 3,
  };
  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed url={url} imageUrl={placeholderImageUrl} style={placeholderStyle} linkText={linkText} />
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
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <div id={uuidRef.current} className={classNames(!ready && 'rsme-d-none')}>
        <div className="fb-post" data-href={url} style={{ width: width ?? 550, height: height ?? undefined }}></div>
      </div>
      {!ready && !placeholderDisabled && placeholder}
    </div>
  );
};
