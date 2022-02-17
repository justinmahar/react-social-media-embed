import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InstagramEmbed } from '../../components/embeds/InstagramEmbed';
import { EmbedToggler } from '../EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Embeds/InstagramEmbed',
  component: InstagramEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof InstagramEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InstagramEmbed> = (args) => (
  <EmbedToggler>
    <InstagramEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.instagram.com/p/CUbHfhpswxt/',
  width: 540,
};
