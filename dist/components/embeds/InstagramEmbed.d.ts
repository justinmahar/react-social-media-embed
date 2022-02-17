import * as React from 'react';
import { DivProps } from 'react-html-props';
export interface InstagramEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const InstagramEmbed: ({ url, igVersion, linkText, processDelay, scriptLoadDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, embedPlaceholder, placeholderDisabled, placeholderImageUrl, ...divProps }: InstagramEmbedProps) => JSX.Element;
