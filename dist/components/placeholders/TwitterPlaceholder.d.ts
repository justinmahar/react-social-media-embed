/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface TwitterPlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const TwitterPlaceholder: ({ url, linkText, imageUrl, ...divProps }: TwitterPlaceholderProps) => JSX.Element;
