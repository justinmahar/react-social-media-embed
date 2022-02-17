/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface EmbedPlaceholderProps extends DivProps {
    url: string;
    image?: string;
}
export declare function EmbedPlaceholder({ url, image, ...divProps }: EmbedPlaceholderProps): JSX.Element;
