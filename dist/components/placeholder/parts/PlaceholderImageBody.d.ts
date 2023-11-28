import React from 'react';
import { DivProps } from 'react-html-props';
export interface PlaceholderImageBodyProps extends DivProps {
    imageUrl: string;
}
export declare const PlaceholderImageBody: ({ imageUrl, ...divProps }: PlaceholderImageBodyProps) => React.JSX.Element;
