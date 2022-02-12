/// <reference types="react" />
import { DivPropsWithoutRef } from 'react-html-props';
export interface YouTubeEmbedProps extends DivPropsWithoutRef {
    url: string;
}
export declare const YouTubeEmbed: ({ url, ...divProps }: YouTubeEmbedProps) => JSX.Element;
