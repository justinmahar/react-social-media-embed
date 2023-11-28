import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface PinterestEmbedProps extends DivProps {
    url: string;
    postUrl?: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    placeholderImageUrl?: string;
    placeholderSpinner?: React.ReactNode;
    placeholderSpinnerDisabled?: boolean;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
}
export declare const PinterestEmbed: ({ url, postUrl, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, ...divProps }: PinterestEmbedProps) => React.JSX.Element;
