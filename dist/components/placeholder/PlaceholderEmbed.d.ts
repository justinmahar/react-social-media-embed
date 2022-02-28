/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface PlaceholderEmbedProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
    spinnerDisabled?: boolean;
}
export declare const PlaceholderEmbed: ({ url, linkText, imageUrl, spinnerDisabled, ...divProps }: PlaceholderEmbedProps) => JSX.Element;
