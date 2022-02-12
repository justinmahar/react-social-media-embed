import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { EmbedPlaceholder } from './EmbedPlaceholder';

export interface LinkedInEmbedProps extends DivProps {
  url: string;
  iframeCode: string;
}

export const LinkedInEmbed = ({ url, iframeCode: embedMeta, ...divProps }: LinkedInEmbedProps) => {
  const [showPlaceholder, setShowPlaceholder] = React.useState(true);
  let embedId = '0000000000000000000';
  let height = 330;
  try {
    const embedIdMatch = (embedMeta || '').match(/urn:li:share:([\d]+)/);
    if (embedIdMatch) {
      embedId = embedIdMatch[1];
    }
    const heightMatch = (embedMeta || '').match(/height="([\d]+)"/);
    if (heightMatch) {
      height = Number.parseInt(heightMatch[1]);
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div {...divProps} className={classNames(divProps.className)} style={{ ...divProps.style }}>
      <div
        className="linkedin-embed-container"
        style={{ width: '100%', minWidth: 300, maxWidth: 550, position: 'relative' }}
      >
        <iframe
          src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${embedId}`}
          width="100%"
          height={showPlaceholder ? 0 : height}
          frameBorder="0"
          onLoad={() => setShowPlaceholder(false)}
        ></iframe>
        {showPlaceholder && <EmbedPlaceholder url={url} />}
      </div>
    </div>
  );
};
