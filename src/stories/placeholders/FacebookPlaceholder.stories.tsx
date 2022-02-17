import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmbedToggler } from '../EmbedToggler';
import { FacebookPlaceholder } from '../../components/placeholders/FacebookPlaceholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Placeholders/FacebookPlaceholder',
  component: FacebookPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof FacebookPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FacebookPlaceholder> = (args) => (
  <EmbedToggler>
    <FacebookPlaceholder {...args} />
  </EmbedToggler>
);

export const UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UrlOnly.args = {
  url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
  style: {
    maxWidth: 550,
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
  imageUrl: 'https://placekitten.com/540/340',
  style: {
    maxWidth: 550,
  },
};
