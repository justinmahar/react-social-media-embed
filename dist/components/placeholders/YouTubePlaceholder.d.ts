/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface YouTubePlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const YouTubePlaceholder: ({ url, linkText, imageUrl, ...divProps }: YouTubePlaceholderProps) => JSX.Element;
