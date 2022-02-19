import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTubeEmbed } from '../../components/embeds/YouTubeEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/YouTubeEmbed',
  component: YouTubeEmbed,
} as ComponentMeta<typeof YouTubeEmbed>;

const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const placeholderImageUrl = `https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=Date.now()`;

const MainExampleTemplate: ComponentStory<typeof YouTubeEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <YouTubeEmbed {...args} />
    </div>
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof YouTubeEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <YouTubeEmbed {...args} />
  </EmbedToggler>
);

export const MainExample = MainExampleTemplate.bind({});
MainExample.args = {
  url,
  placeholderImageUrl,
  width: 325,
  height: 220,
};

export const Size100x100 = ToggledOffTemplate.bind({});
Size100x100.args = {
  url,
  width: 100,
  height: 100,
};

export const Size100x200 = ToggledOffTemplate.bind({});
Size100x200.args = {
  url,
  width: 100,
  height: 200,
};

export const Size200x100 = ToggledOffTemplate.bind({});
Size200x100.args = {
  url,
  width: 200,
  height: 100,
};

export const Size200x200 = ToggledOffTemplate.bind({});
Size200x200.args = {
  url,
  width: 200,
  height: 200,
};

export const Size200x400 = ToggledOffTemplate.bind({});
Size200x400.args = {
  url,
  width: 200,
  height: 400,
};

export const Size400x200 = ToggledOffTemplate.bind({});
Size400x200.args = {
  url,
  width: 400,
  height: 200,
};

export const Size400x600 = ToggledOffTemplate.bind({});
Size400x600.args = {
  url,
  width: 400,
  height: 600,
};

export const Size600x400 = ToggledOffTemplate.bind({});
Size600x400.args = {
  url,
  width: 600,
  height: 400,
};

export const Width100 = ToggledOffTemplate.bind({});
Width100.args = {
  url,
  width: 100,
};

export const Width200 = ToggledOffTemplate.bind({});
Width200.args = {
  url,
  width: 200,
};

export const Width400 = ToggledOffTemplate.bind({});
Width400.args = {
  url,
  width: 400,
};

export const Width800 = ToggledOffTemplate.bind({});
Width800.args = {
  url,
  width: 800,
};

export const Width50Percent = ToggledOffTemplate.bind({});
Width50Percent.args = {
  url,
  width: '50%',
};

export const Width100Percent = ToggledOffTemplate.bind({});
Width100Percent.args = {
  url,
  width: '100%',
};

export const UrlOnly = ToggledOffTemplate.bind({});
UrlOnly.args = {
  url,
};

export const WithPlaceholderImage = ToggledOffTemplate.bind({});
WithPlaceholderImage.args = {
  url,
  placeholderImageUrl,
};

export const CustomPlaceholder = ToggledOffTemplate.bind({});
CustomPlaceholder.args = {
  url,
  embedPlaceholder: (
    <div
      style={{
        width: 325,
        padding: '150px 0',
        backgroundColor: 'lightsteelblue',
        textAlign: 'center',
      }}
    >
      Custom Placeholder!
    </div>
  ),
};

export const CustomPlaceholderLinkText = ToggledOffTemplate.bind({});
CustomPlaceholderLinkText.args = {
  url,
  linkText: 'Custom link text',
};

export const PlaceholderDisabled = ToggledOffTemplate.bind({});
PlaceholderDisabled.args = {
  url,
  placeholderDisabled: true,
};
