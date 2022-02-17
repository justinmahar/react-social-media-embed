/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface LinkedInPlaceholderProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
}
export declare const LinkedInPlaceholder: ({ url, linkText, imageUrl, ...divProps }: LinkedInPlaceholderProps) => JSX.Element;
