import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import YouTube, { Options, YouTubeProps } from 'react-youtube';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const maxPlaceholderWidth = 640;
const defaultPlaceholderHeight = 360;

export interface YouTubeEmbedProps extends DivPropsWithoutRef {
  url: string;
  youTubeProps: YouTubeProps;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
  placeholderProps?: PlaceholderEmbedProps;
}

export const YouTubeEmbed = ({
  url,
  youTubeProps,
  width,
  height,
  linkText = 'Watch on YouTube',
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  placeholderProps,
  ...divProps
}: YouTubeEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const [ready, setReady] = React.useState(false);

  let videoId = '00000000';
  const videoIdMatch = url.match(/[?&]v=(.+?)(?:$|[&])/);
  if (videoIdMatch) {
    videoId = videoIdMatch[1];
  }

  const isPercentageWidth = !!width?.toString().includes('%');
  const isPercentageHeight = !!height?.toString().includes('%');

  let opts: Options = {};
  if (typeof width !== 'undefined') {
    opts.width = isPercentageWidth ? '100%' : `${width}`;
  }
  if (typeof height !== 'undefined') {
    opts.height = isPercentageHeight ? '100%' : `${height}`;
  }
  opts = { ...opts, ...youTubeProps?.opts };

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
    borderRadius: 0,
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
      className={classNames('rsme-embed rsme-youtube-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <div className={classNames(!ready && 'rsme-d-none')}>
        <YouTube
          {...youTubeProps}
          className={youTubeProps?.className ?? 'youtube-iframe'}
          videoId={youTubeProps?.videoId ?? videoId}
          opts={opts}
          onReady={(e) => {
            setReady(true);
            if (youTubeProps && youTubeProps.onReady) {
              youTubeProps?.onReady(e);
            }
          }}
        />
      </div>
      {!ready && !placeholderDisabled && placeholder}
    </div>
  );
};
