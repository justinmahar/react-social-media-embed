import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface InstagramEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    scriptLoadDisabled?: boolean;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
    retryDelay?: number;
    retryDisabled?: boolean;
    igVersion?: string;
    debug?: boolean;
}
export declare const InstagramEmbed: ({ url, width, height, linkText, scriptLoadDisabled, embedPlaceholder, placeholderDisabled, placeholderImageUrl, placeholderProps, retryDelay, retryDisabled, igVersion, debug, ...divProps }: InstagramEmbedProps) => JSX.Element;
