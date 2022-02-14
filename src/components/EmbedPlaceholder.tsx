import * as React from 'react';
import { DivProps } from 'react-html-props';
import './rsme.css';

export interface DefaultEmbedProps extends DivProps {
  url: string;
  image?: string;
}

export function EmbedPlaceholder({ url, image, ...divProps }: DefaultEmbedProps) {
  return (
    <div
      {...divProps}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px #c9d4d9',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: 540,
        height: 540,
        backgroundImage: image ? `url("${image}")` : undefined,
        backgroundRepeat: image ? 'no-repeat' : undefined,
        backgroundPosition: image ? 'center' : undefined,
        backgroundSize: image ? 'cover' : undefined,
        ...divProps.style,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          >
            <div>View Post</div>
          </div>
        </div>
      </a>
    </div>
  );
}
