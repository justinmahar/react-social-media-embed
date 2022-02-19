import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface TikTokEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryDelay?: number;
    igVersion?: string;
    debug?: boolean;
}
export declare const TikTokEmbed: ({ url, width, height, linkText, embedPlaceholder, placeholderDisabled, placeholderImageUrl, placeholderProps, scriptLoadDisabled, retryDelay, retryDisabled, debug, ...divProps }: TikTokEmbedProps) => JSX.Element;
