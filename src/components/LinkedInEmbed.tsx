import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { EmbedPlaceholder } from './EmbedPlaceholder';

export interface LinkedInEmbedProps extends DivProps {
  url: string;
  postUrl?: string;
  height?: string | number;
}

export const LinkedInEmbed = ({ postUrl, url, height = 330, ...divProps }: LinkedInEmbedProps) => {
  const [showPlaceholder, setShowPlaceholder] = React.useState(true);

  return (
    <div {...divProps} className={classNames(divProps.className)} style={{ ...divProps.style }}>
      <div
        className="linkedin-embed-container"
        style={{ width: '100%', minWidth: 300, maxWidth: 550, position: 'relative' }}
      >
        <iframe
          src={url}
          width="100%"
          height={showPlaceholder ? 0 : height}
          frameBorder="0"
          onLoad={() => setShowPlaceholder(false)}
        ></iframe>
        {showPlaceholder && <EmbedPlaceholder url={postUrl ?? url} />}
      </div>
    </div>
  );
};
