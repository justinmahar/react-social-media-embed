import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTubeEmbed } from '../../components/embeds/YouTubeEmbed';
import { EmbedToggler } from '../EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Embeds/YouTubeEmbed',
  component: YouTubeEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof YouTubeEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof YouTubeEmbed> = (args) => (
  <EmbedToggler>
    <YouTubeEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.youtube.com/watch?v=HpVOs5imUN0',
  width: 200,
  height: 100,
};
