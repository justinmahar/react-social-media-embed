import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { InstagramPlaceholder } from '../../components/placeholders/InstagramPlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/InstagramPlaceholder',
  component: InstagramPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof InstagramPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InstagramPlaceholder> = (args) => (
  <EmbedToggler>
    <InstagramPlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.instagram.com/p/CUbHfhpswxt/',
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://www.instagram.com/p/CUbHfhpswxt/',
  imageUrl: 'https://placekitten.com/540/540',
};
