import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import { PlaceholderEmbed, PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
import { EmbedStyle } from './EmbedStyle';

const minPlaceholderWidth = 250;
const maxPlaceholderWidth = 550;
const defaultPlaceholderHeight = 350;
const borderRadius = 12;

export interface TwitterEmbedProps extends DivPropsWithoutRef {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  placeholderImageUrl?: string;
  placeholderSpinnerDisabled?: boolean;
  placeholderProps?: PlaceholderEmbedProps;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  twitterTweetEmbedProps?: TwitterTweetEmbedProps;
}

export const TwitterEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Twitter',
  placeholderImageUrl,
  placeholderSpinnerDisabled = false,
  placeholderProps,
  embedPlaceholder,
  placeholderDisabled,
  twitterTweetEmbedProps,
  ...divProps
}: TwitterEmbedProps) => {
  const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');

  const isPercentageWidth = !!width?.toString().includes('%');
  const isPercentageHeight = !!height?.toString().includes('%');

  // === Placeholder ===
  const placeholderStyle: React.CSSProperties = {
    minWidth: minPlaceholderWidth,
    maxWidth: maxPlaceholderWidth,
    width: typeof width !== 'undefined' ? (isPercentageWidth ? '100%' : width) : '100%',
    height: isPercentageHeight
      ? '100%'
      : typeof height !== 'undefined'
      ? height
      : typeof divProps.style?.height !== 'undefined' || typeof divProps.style?.maxHeight !== 'undefined'
      ? '100%'
      : defaultPlaceholderHeight,
    border: 'solid 1px #c9d4d9',
    borderRadius,
  };
  const placeholder = embedPlaceholder ?? (
    <PlaceholderEmbed
      url={url}
      imageUrl={placeholderImageUrl}
      linkText={linkText}
      spinnerDisabled={placeholderSpinnerDisabled}
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
        borderRadius,
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
