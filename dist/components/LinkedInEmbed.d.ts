/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface LinkedInEmbedProps extends DivProps {
    url: string;
    postUrl?: string;
    height?: string | number;
}
export declare const LinkedInEmbed: ({ postUrl, url, height, ...divProps }: LinkedInEmbedProps) => JSX.Element;
