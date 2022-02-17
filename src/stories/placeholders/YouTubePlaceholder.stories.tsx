import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { YouTubePlaceholder } from '../../components/placeholders/YouTubePlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/YouTubePlaceholder',
  component: YouTubePlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof YouTubePlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof YouTubePlaceholder> = (args) => (
  <EmbedToggler>
    <YouTubePlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.youtube.com/watch?v=d-qqom30TZA',
  style: {
    width: 640,
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://www.youtube.com/watch?v=d-qqom30TZA',
  imageUrl: 'https://placekitten.com/640/360',
  style: {
    width: 640,
  },
};
