import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkedInEmbed } from '../components/LinkedInEmbed';
import { EmbedToggler } from './EmbedToggler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LinkedInEmbed',
  component: LinkedInEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LinkedInEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkedInEmbed> = (args) => (
  <EmbedToggler>
    <LinkedInEmbed {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
  iframeCode:
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6892528764350185473" height="587" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
};
