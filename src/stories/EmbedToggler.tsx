import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import './button.css';

export interface EmbedTogglerProps extends DivProps {}

export const EmbedToggler = ({ ...divProps }: EmbedTogglerProps) => {
  const [show, setShow] = React.useState(true);
  return (
    <div {...divProps} className={classNames(divProps.className)} style={{ ...divProps.style }}>
      <div className="button" onClick={() => setShow(!show)} style={{ marginBottom: '5px' }}>
        {show ? 'Hide Embed' : 'Show Embed'}
      </div>
      <div>{show && divProps.children}</div>
    </div>
  );
};
