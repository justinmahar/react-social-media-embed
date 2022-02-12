import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TwitterEmbed } from '../components/TwitterEmbed';
import { EmbedToggler } from './EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TwitterEmbed',
  component: TwitterEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TwitterEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwitterEmbed> = (args) => (
  <EmbedToggler>
    <TwitterEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://twitter.com/PixelAndBracket/status/1356633038717923333',
};
