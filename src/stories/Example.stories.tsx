import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Example } from '../components/Example';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Example',
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Hello = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hello.args = {
  label: 'Hello',
};

export const World = Template.bind({});
World.args = {
  label: 'World',
};
