import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DivProps } from 'react-html-props';

export interface FacebookEmbedProps extends DivProps {
  url: string;
}

// https://developers.facebook.com/docs/plugins/embedded-posts/?prefill_href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2F451971596293956#code-generator

export const FacebookEmbed = ({ url, ...divProps }: FacebookEmbedProps) => {
  const [processTime, setProcessTime] = React.useState(-1);
  const [show, setShow] = React.useState(true);

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

  return (
    <div {...divProps} className={classNames(divProps.className)} style={{ ...divProps.style }}>
      <div className="fb-post" data-href={url}></div>
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
    </div>
  );
};
