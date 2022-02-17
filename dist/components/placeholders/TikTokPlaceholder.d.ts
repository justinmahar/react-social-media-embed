/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface TikTokPlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const TikTokPlaceholder: ({ url, linkText, imageUrl, ...divProps }: TikTokPlaceholderProps) => JSX.Element;
