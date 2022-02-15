import React from 'react';
import { DivProps } from 'react-html-props';
import '../rsme.css';
export interface TikTokEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
}
export declare const TikTokEmbed: ({ url, width, height, embedPlaceholder, placeholderDisabled, processDelay, scriptLoadDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, ...divProps }: TikTokEmbedProps) => JSX.Element;
