import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import { TwitterPlaceholder } from '../placeholders/TwitterPlaceholder';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

export interface TwitterEmbedProps extends DivPropsWithoutRef {
  url: string;
  twitterTweetEmbedProps?: TwitterTweetEmbedProps;
  width?: string | number;
  height?: string | number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
}

export const TwitterEmbed = ({
  url,
  twitterTweetEmbedProps,
  width,
  height,
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  ...divProps
}: TwitterEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');

  const placeholder = embedPlaceholder ?? (
    <TwitterPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? '100%',
        height: divProps.style?.height ? '100%' : height ?? 300,
        minWidth: 250,
        maxWidth: 550,
      }}
      imageUrl={placeholderImageUrl}
    />
  );

  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-twitter-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <TwitterTweetEmbed
        tweetId={tweetId}
        placeholder={placeholderDisabled ? undefined : placeholder}
        {...twitterTweetEmbedProps}
      />
    </div>
  );
};
