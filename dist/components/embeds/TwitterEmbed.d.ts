import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import '../rsme.css';
export interface TwitterEmbedProps extends DivPropsWithoutRef {
    url: string;
    twitterTweetEmbedProps?: TwitterTweetEmbedProps;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
}
export declare const TwitterEmbed: ({ url, twitterTweetEmbedProps, width, height, embedPlaceholder, placeholderDisabled, ...divProps }: TwitterEmbedProps) => JSX.Element;
