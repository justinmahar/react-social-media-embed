import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DivProps } from 'react-html-props';
import { EmbedPlaceholder } from '..';
import { generateUUID } from './uuid';
import './rsme.css';

export interface FacebookEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
}

// https://developers.facebook.com/docs/plugins/embedded-posts/?prefill_href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2F451971596293956#code-generator

export const FacebookEmbed = ({
  url,
  width,
  height,
  embedPlaceholder,
  placeholderDisabled,
  ...divProps
}: FacebookEmbedProps) => {
  const [ready, setReady] = React.useState(false);
  const [processTime, setProcessTime] = React.useState(-1);
  const [show, setShow] = React.useState(true);
  const uuidRef = React.useRef(generateUUID());

  React.useEffect(() => {
    const timeout: any = setTimeout(() => {
      if (typeof document !== 'undefined') {
        [...document.getElementsByTagName('script')].forEach((script) => {
          // if (script.src.includes('connect.facebook.net')) {
          //   console.log('Removing', script);
          //   script.remove();
          // }
        });
        (window as any).FB = undefined;
        setProcessTime(Date.now());
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [show]);

  const placeholder = embedPlaceholder ?? (
    <EmbedPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? 550,
        height: divProps.style?.height ? '100%' : height ?? 372,
        borderRadius: divProps.style?.borderRadius ?? 3,
      }}
    />
  );

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
      }, 50);
    }
    return () => clearInterval(timeout);
  }, [ready]);

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
      <div id={uuidRef.current} className={classNames(!ready && 'rsme-d-none')}>
        <div className="fb-post" data-href={url}></div>
      </div>
      {processTime > 0 && (
        <Helmet>
          {
            <script
              key={`facebook-embed-${processTime}`}
              src={`https://connect.facebook.net/en_US/sdk.js?t=${processTime}#xfbml=1&version=v3.2`}
            ></script>
          }
        </Helmet>
      )}
      {!ready && !placeholderDisabled && placeholder}
    </div>
  );
};
