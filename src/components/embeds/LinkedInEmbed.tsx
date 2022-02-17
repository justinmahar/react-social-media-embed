import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbed } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

export interface LinkedInEmbedProps extends DivProps {
  url: string;
  postUrl?: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
}

export const LinkedInEmbed = ({
  postUrl,
  url,
  width,
  height = 500,
  linkText = 'View post on LinkedIn',
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  ...divProps
}: LinkedInEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const [ready, setReady] = React.useState(false);

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    minWidth: 300,
    maxWidth: 550,
    width: typeof width !== 'undefined' ? width : '100%',
    height:
      typeof height !== 'undefined'
        ? height
        : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
        ? '100%'
        : 550,
    border: 'solid 1px rgba(0, 0, 0, 0.15)',
    borderRadius: 8,
  };
  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed
      url={postUrl ?? url}
      style={placeholderStyle}
      imageUrl={placeholderImageUrl}
      linkText={linkText}
    />
  );
  // === END Placeholder ===

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
