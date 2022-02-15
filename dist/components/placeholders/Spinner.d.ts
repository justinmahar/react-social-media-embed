/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface SpinnerProps extends DivProps {
    size?: number;
}
export declare const Spinner: ({ size, ...divProps }: SpinnerProps) => JSX.Element;
