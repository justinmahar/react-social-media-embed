import React from 'react';
import { DivProps } from 'react-html-props';
export interface FacebookEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const FacebookEmbed: ({ url, width, height, linkText, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, placeholderImageUrl, ...divProps }: FacebookEmbedProps) => JSX.Element;
