import React from 'react';
import { DivProps } from 'react-html-props';
import '../rsme.css';
export interface FacebookEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
}
export declare const FacebookEmbed: ({ url, width, height, embedPlaceholder, placeholderDisabled, ...divProps }: FacebookEmbedProps) => JSX.Element;
