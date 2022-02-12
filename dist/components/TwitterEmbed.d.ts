/// <reference types="react" />
import { DivPropsWithoutRef } from 'react-html-props';
export interface TwitterEmbedProps extends DivPropsWithoutRef {
    url: string;
}
export declare const TwitterEmbed: ({ url, ...divProps }: TwitterEmbedProps) => JSX.Element;
