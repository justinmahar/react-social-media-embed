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
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
}
export declare const TikTokEmbed: ({ url, width, height, linkText, embedPlaceholder, placeholderDisabled, processDelay, scriptLoadDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, placeholderImageUrl, placeholderProps, ...divProps }: TikTokEmbedProps) => JSX.Element;
