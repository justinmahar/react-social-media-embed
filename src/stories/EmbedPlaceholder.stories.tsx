import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedPlaceholder } from '../components/EmbedPlaceholder';
import { EmbedToggler } from './EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/EmbedPlaceholder',
  component: EmbedPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof EmbedPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmbedPlaceholder> = (args) => (
  <EmbedToggler>
    <EmbedPlaceholder {...args} />
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
  image: 'https://placekitten.com/540/540',
};
