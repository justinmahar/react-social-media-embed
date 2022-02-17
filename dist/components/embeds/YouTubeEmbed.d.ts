import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { YouTubeProps } from 'react-youtube';
export interface YouTubeEmbedProps extends DivPropsWithoutRef {
    url: string;
    youTubeProps: YouTubeProps;
    width?: string | number;
    height?: string | number;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    placeholderImageUrl?: string;
}
export declare const YouTubeEmbed: ({ url, youTubeProps, width, height, embedPlaceholder, placeholderDisabled, placeholderImageUrl, ...divProps }: YouTubeEmbedProps) => JSX.Element;
