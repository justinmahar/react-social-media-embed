import * as React from 'react';
import { DivProps } from 'react-html-props';
export interface InstagramEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    igVersion?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const InstagramEmbed: ({ url, igVersion, width, height, linkText, processDelay, scriptLoadDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, embedPlaceholder, placeholderDisabled, placeholderImageUrl, ...divProps }: InstagramEmbedProps) => JSX.Element;
