import React from 'react';
import { DivProps } from 'react-html-props';
export interface PlaceholderEmbedProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
    spinner?: React.ReactNode;
    spinnerDisabled?: boolean;
}
export declare const PlaceholderEmbed: ({ url, linkText, imageUrl, spinner, spinnerDisabled, ...divProps }: PlaceholderEmbedProps) => JSX.Element;
