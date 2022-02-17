import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { TikTokPlaceholder } from '../../components/placeholders/TikTokPlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/TikTokPlaceholder',
  component: TikTokPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TikTokPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TikTokPlaceholder> = (args) => (
  <EmbedToggler>
    <TikTokPlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1',
  style: {
    width: 325,
    minWidth: 325,
    maxWidth: 480,
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1',
  imageUrl: 'https://placekitten.com/325/540',
  style: {
    width: 325,
    minWidth: 325,
    maxWidth: 480,
  },
};
