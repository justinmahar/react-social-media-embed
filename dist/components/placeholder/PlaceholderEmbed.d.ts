/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface PlaceholderEmbedProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const PlaceholderEmbed: ({ url, linkText, imageUrl, ...divProps }: PlaceholderEmbedProps) => JSX.Element;
