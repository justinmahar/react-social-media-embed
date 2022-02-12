/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface FacebookEmbedProps extends DivProps {
    url: string;
}
export declare const FacebookEmbed: ({ url, ...divProps }: FacebookEmbedProps) => JSX.Element;
