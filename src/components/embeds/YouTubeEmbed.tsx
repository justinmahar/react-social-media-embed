import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import YouTube, { Options, YouTubeProps } from 'react-youtube';
import { EmbedPlaceholder } from '../..';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

export interface YouTubeEmbedProps extends DivPropsWithoutRef {
  url: string;
  youTubeProps: YouTubeProps;
  width?: string | number;
  height?: string | number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
}

export const YouTubeEmbed = ({
  url,
  youTubeProps,
  width,
  height,
  embedPlaceholder,
  placeholderDisabled,
  ...divProps
}: YouTubeEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const [ready, setReady] = React.useState(false);

  let videoId = '00000000';
  const videoIdMatch = url.match(/[?&]v=(.+?)(?:$|[&])/);
  if (videoIdMatch) {
    videoId = videoIdMatch[1];
  }

  let opts: Options = {};
  if (typeof width !== 'undefined') {
    opts.width = `${width}`;
  }
  if (typeof height !== 'undefined') {
    opts.height = `${height}`;
  }
  opts = { ...opts, ...youTubeProps?.opts };

  const placeholder = embedPlaceholder ?? (
    <EmbedPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? 640,
        height: divProps.style?.height ? '100%' : height ?? 360,
        borderRadius: divProps.style?.borderRadius ?? 0,
      }}
    />
  );

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
