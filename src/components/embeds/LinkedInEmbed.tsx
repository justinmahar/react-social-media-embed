import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { LinkedInPlaceholder } from '../placeholders/LinkedInPlaceholder';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

export interface LinkedInEmbedProps extends DivProps {
  url: string;
  postUrl?: string;
  width?: string | number;
  height?: string | number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
}

export const LinkedInEmbed = ({
  postUrl,
  url,
  width,
  height = 500,
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  ...divProps
}: LinkedInEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const [ready, setReady] = React.useState(false);

  const placeholder = embedPlaceholder ?? (
    <LinkedInPlaceholder
      url={postUrl ?? url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? '100%',
        height: divProps.style?.height ? '100%' : height ?? 400,
        minWidth: 300,
        maxWidth: 550,
      }}
      imageUrl={placeholderImageUrl}
    />
  );

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-linkedin-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <iframe
        className={classNames('linkedin-post', !ready && 'rsme-d-none')}
        src={url}
        width="100%"
        height={!ready ? 0 : height}
        frameBorder="0"
        onLoad={() => setReady(true)}
      ></iframe>
      {!placeholderDisabled && placeholder}
    </div>
  );
};
