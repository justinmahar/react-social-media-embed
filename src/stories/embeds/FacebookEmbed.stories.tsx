import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FacebookEmbed } from '../../components/embeds/FacebookEmbed';
import { EmbedToggler } from '../EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Embeds/FacebookEmbed',
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

export const UrlOnlyPost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnlyPost.args = {
  url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
};

export const UrlOnlyVideo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnlyVideo.args = {
  url: 'https://fb.watch/b67iYbdzNm/',
};
