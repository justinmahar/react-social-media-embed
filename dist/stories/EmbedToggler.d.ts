import React from 'react';
import { DivProps } from 'react-html-props';
import './button.css';
export interface EmbedTogglerProps extends DivProps {
    defaultToggledOn?: boolean;
}
export declare const EmbedToggler: ({ defaultToggledOn, ...divProps }: EmbedTogglerProps) => React.JSX.Element;
