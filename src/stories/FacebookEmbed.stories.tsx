import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FacebookEmbed } from '../components/FacebookEmbed';
import { EmbedToggler } from './EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FacebookEmbed',
  component: FacebookEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof FacebookEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FacebookEmbed> = (args) => (
  <EmbedToggler>
    <FacebookEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://fb.watch/b67iYbdzNm/',
};
