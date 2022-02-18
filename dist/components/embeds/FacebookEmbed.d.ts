import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface FacebookEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
}
export declare const FacebookEmbed: ({ url, width, height, linkText, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, placeholderImageUrl, placeholderProps, ...divProps }: FacebookEmbedProps) => JSX.Element;
