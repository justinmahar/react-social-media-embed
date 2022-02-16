/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface DefaultEmbedProps extends DivProps {
    url: string;
    image?: string;
}
export declare function EmbedPlaceholder({ url, image, ...divProps }: DefaultEmbedProps): JSX.Element;
