/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface FacebookPlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const FacebookPlaceholder: ({ url, linkText, imageUrl, ...divProps }: FacebookPlaceholderProps) => JSX.Element;
