/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface InstagramPlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const InstagramPlaceholder: ({ url, linkText, imageUrl, ...divProps }: InstagramPlaceholderProps) => JSX.Element;
