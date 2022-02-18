import * as React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface LinkedInEmbedProps extends DivProps {
    url: string;
    postUrl?: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
}
export declare const LinkedInEmbed: ({ postUrl, url, width, height, linkText, embedPlaceholder, placeholderDisabled, placeholderImageUrl, placeholderProps, ...divProps }: LinkedInEmbedProps) => JSX.Element;
