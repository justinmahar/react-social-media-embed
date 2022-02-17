import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { generateUUID } from '../../uuid';

export interface SpinnerProps extends DivProps {
  size?: number;
}

export const Spinner = ({ size = 20, ...divProps }: SpinnerProps) => {
  const uuidRef = React.useRef(generateUUID());
  const className = `rsme-spinner-${uuidRef.current}`;
  const borderSize = Math.max(Math.round(0.2 * size), 1);
  const sideLength = Math.max(size - borderSize * 2, 1);
  const style = (
    <style>
      {`
        .${className} {
          border: ${borderSize}px solid rgba(0, 0, 0, 0.1);
          border-top: ${borderSize}px solid ${divProps.style?.color ?? '#000000'};
          border-radius: 50%;
          width: ${sideLength}px;
          min-width: ${sideLength}px;
          max-width: ${sideLength}px;
          height: ${sideLength}px;
          min-height: ${sideLength}px;
          max-height: ${sideLength}px;
          animation: ${className}-spin 1s linear infinite;
        }

        @keyframes ${className}-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `}
    </style>
  );

  return (
    <>
      {style}
      <div
        {...divProps}
        className={classNames('rsme-spinner', className, divProps.className)}
        style={{ ...divProps.style }}
      >
        {divProps.children}
      </div>
    </>
  );
};
