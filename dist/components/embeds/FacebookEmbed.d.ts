import React from 'react';
import { DivProps } from 'react-html-props';
import { Frame } from '../hooks/useFrame';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface FacebookEmbedProps extends DivProps {
    /** The URL to the post. */
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
export declare const FacebookEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, frame, debug, ...divProps }: FacebookEmbedProps) => JSX.Element;
