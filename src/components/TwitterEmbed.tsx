import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import { EmbedPlaceholder } from './EmbedPlaceholder';
import './rsme.css';

export interface TwitterEmbedProps extends DivPropsWithoutRef {
  url: string;
  twitterTweetEmbedProps?: TwitterTweetEmbedProps;
  width?: string | number;
  height?: string | number;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
}

export const TwitterEmbed = ({
  url,
  twitterTweetEmbedProps,
  width,
  height,
  embedPlaceholder,
  placeholderDisabled,
  ...divProps
}: TwitterEmbedProps) => {
  const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');

  const placeholder = embedPlaceholder ?? (
    <EmbedPlaceholder
      url={url}
      style={{
        width: divProps.style?.width ? '100%' : width ?? '100%',
        height: divProps.style?.height ? '100%' : height ?? 400,
        borderRadius: divProps.style?.borderRadius ?? '12px',
        borderColor: '#c9d4d9',
        minWidth: 250,
        maxWidth: 550,
      }}
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
      <TwitterTweetEmbed
        tweetId={tweetId}
        placeholder={placeholderDisabled ? undefined : placeholder}
        {...twitterTweetEmbedProps}
      />
    </div>
  );
};
