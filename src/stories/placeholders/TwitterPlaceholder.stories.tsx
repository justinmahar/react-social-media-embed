import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { TwitterPlaceholder } from '../../components/placeholders/TwitterPlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/TwitterPlaceholder',
  component: TwitterPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TwitterPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwitterPlaceholder> = (args) => (
  <EmbedToggler>
    <TwitterPlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://twitter.com/PixelAndBracket/status/1356633038717923333',
  style: {
    minWidth: 250,
    maxWidth: 550,
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://twitter.com/PixelAndBracket/status/1356633038717923333',
  imageUrl: 'https://placekitten.com/550/350',
  style: {
    minWidth: 250,
    maxWidth: 550,
  },
};
