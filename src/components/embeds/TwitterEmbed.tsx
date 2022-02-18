import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { generateUUID } from '../uuid';
import { EmbedStyle } from './EmbedStyle';

const minPlaceholderWidth = 250;
const maxPlaceholderWidth = 550;
const defaultPlaceholderHeight = 350;

export interface TwitterEmbedProps extends DivPropsWithoutRef {
  url: string;
  twitterTweetEmbedProps?: TwitterTweetEmbedProps;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  placeholderImageUrl?: string;
  placeholderProps?: PlaceholderEmbedProps;
}

export const TwitterEmbed = ({
  url,
  twitterTweetEmbedProps,
  width,
  height,
  linkText = 'View post on Twitter',
  embedPlaceholder,
  placeholderDisabled,
  placeholderImageUrl,
  placeholderProps,
  ...divProps
}: TwitterEmbedProps) => {
  const uuidRef = React.useRef(generateUUID());
  const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    minWidth: minPlaceholderWidth,
    maxWidth: maxPlaceholderWidth,
    width: typeof width !== 'undefined' ? width : '100%',
    height:
      typeof height !== 'undefined'
        ? height
        : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
        ? '100%'
        : defaultPlaceholderHeight,
    border: 'solid 1px #c9d4d9',
    borderRadius: 12,
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
