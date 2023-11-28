import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { YouTubeProps } from 'react-youtube';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface YouTubeEmbedProps extends DivPropsWithoutRef {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    placeholderImageUrl?: string;
    placeholderSpinner?: React.ReactNode;
    placeholderSpinnerDisabled?: boolean;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    youTubeProps?: YouTubeProps;
}
export declare const YouTubeEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, youTubeProps, ...divProps }: YouTubeEmbedProps) => React.JSX.Element;
