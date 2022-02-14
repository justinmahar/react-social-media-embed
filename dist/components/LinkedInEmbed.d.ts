import * as React from 'react';
import { DivProps } from 'react-html-props';
import './rsme.css';
export interface LinkedInEmbedProps extends DivProps {
    url: string;
    postUrl?: string;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
}
export declare const LinkedInEmbed: ({ postUrl, url, width, height, embedPlaceholder, placeholderDisabled, ...divProps }: LinkedInEmbedProps) => JSX.Element;
