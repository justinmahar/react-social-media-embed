import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { LinkedInPlaceholder } from '../../components/placeholders/LinkedInPlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/LinkedInPlaceholder',
  component: LinkedInPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LinkedInPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkedInPlaceholder> = (args) => (
  <EmbedToggler>
    <LinkedInPlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
  style: {
    minWidth: 300,
    maxWidth: 550,
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
  imageUrl: 'https://placekitten.com/540/300',
  style: {
    minWidth: 300,
    maxWidth: 550,
  },
};
