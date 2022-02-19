import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface FacebookEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    retryDelay?: number;
    retryDisabled?: boolean;
    debug?: boolean;
}
export declare const FacebookEmbed: ({ url, width, height, linkText, embedPlaceholder, placeholderImageUrl, placeholderProps, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, debug, ...divProps }: FacebookEmbedProps) => JSX.Element;
