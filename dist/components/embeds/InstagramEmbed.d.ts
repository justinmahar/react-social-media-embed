import * as React from 'react';
import { DivProps } from 'react-html-props';
import { Frame } from '../hooks/useFrame';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface InstagramEmbedProps extends DivProps {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    /** Deprecated -- This has no effect. Captions are always visible due to https://github.com/justinmahar/react-social-media-embed/issues/26 */
    captioned?: boolean;
    placeholderImageUrl?: string;
    placeholderSpinner?: React.ReactNode;
    placeholderSpinnerDisabled?: boolean;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    retryDelay?: number;
    retryDisabled?: boolean;
    igVersion?: string;
    frame?: Frame;
    debug?: boolean;
}
export declare const InstagramEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, igVersion, frame, debug, ...divProps }: InstagramEmbedProps) => JSX.Element;
