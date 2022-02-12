import React from 'react';
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
export const Example = ({ backgroundColor, label, ...props }: ExampleProps) => {
  return (
    <div {...props} style={{ backgroundColor, ...props.style }}>
      {label}
    </div>
  );
};
