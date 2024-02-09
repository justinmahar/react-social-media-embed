import React from 'react';
import { EmbedToggler } from './EmbedToggler';

export const MainExampleTemplate = (Child: any) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Child />
    </div>
  </EmbedToggler>
);

export const ToggledOffTemplate = (Child: any) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <Child />
  </EmbedToggler>
);

export const ToggledOnTemplate = (Child: any) => (
  <EmbedToggler defaultToggledOn>
    <Child />
  </EmbedToggler>
);
