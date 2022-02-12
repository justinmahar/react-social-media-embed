/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface ExampleProps extends DivProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Label shown in the component
     */
    label: string;
}
/**
 * This is the description for the Example component
 */
export declare const Example: ({ backgroundColor, label, ...props }: ExampleProps) => JSX.Element;
