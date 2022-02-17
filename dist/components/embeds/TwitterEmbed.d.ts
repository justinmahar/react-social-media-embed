import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
export interface TwitterEmbedProps extends DivPropsWithoutRef {
    url: string;
    twitterTweetEmbedProps?: TwitterTweetEmbedProps;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const TwitterEmbed: ({ url, twitterTweetEmbedProps, width, height, linkText, embedPlaceholder, placeholderDisabled, placeholderImageUrl, ...divProps }: TwitterEmbedProps) => JSX.Element;
