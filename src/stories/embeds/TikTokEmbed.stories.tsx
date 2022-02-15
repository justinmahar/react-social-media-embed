import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TikTokEmbed } from '../../components/embeds/TikTokEmbed';
import { EmbedToggler } from '../EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Embeds/TikTokEmbed',
  component: TikTokEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TikTokEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TikTokEmbed> = (args) => (
  <EmbedToggler>
    <TikTokEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1',
};
