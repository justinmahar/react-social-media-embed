import React from 'react';
import { DivProps } from 'react-html-props';
export interface FacebookEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
}
export declare const FacebookEmbed: ({ url, width, height, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, ...divProps }: FacebookEmbedProps) => JSX.Element;
