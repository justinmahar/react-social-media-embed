/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface LinkedInEmbedProps extends DivProps {
    url: string;
    iframeCode: string;
}
export declare const LinkedInEmbed: ({ url, iframeCode: embedMeta, ...divProps }: LinkedInEmbedProps) => JSX.Element;
