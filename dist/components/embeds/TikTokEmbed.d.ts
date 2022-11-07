import React from 'react';
import { DivProps } from 'react-html-props';
import { Frame } from '../hooks/useFrame';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface TikTokEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    placeholderImageUrl?: string;
    placeholderSpinner?: React.ReactNode;
    placeholderSpinnerDisabled?: boolean;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    retryDelay?: number;
    retryDisabled?: boolean;
    frame?: Frame;
    debug?: boolean;
}
export declare const TikTokEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, frame, debug, ...divProps }: TikTokEmbedProps) => JSX.Element;
