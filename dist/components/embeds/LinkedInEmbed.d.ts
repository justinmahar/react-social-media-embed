import * as React from 'react';
import { DivProps } from 'react-html-props';
export interface LinkedInEmbedProps extends DivProps {
    url: string;
    postUrl?: string;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const LinkedInEmbed: ({ postUrl, url, width, height, embedPlaceholder, placeholderDisabled, placeholderImageUrl, ...divProps }: LinkedInEmbedProps) => JSX.Element;
