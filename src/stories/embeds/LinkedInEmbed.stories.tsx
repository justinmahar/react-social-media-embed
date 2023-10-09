import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkedInEmbed } from '../../components/embeds/LinkedInEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/LinkedInEmbed',
  component: LinkedInEmbed,
} as ComponentMeta<typeof LinkedInEmbed>;

const url = 'https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384';
const postUrl =
  'https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7';
const placeholderImageUrl = `https://placekitten.com/504/325`;

const MainExampleTemplate: ComponentStory<typeof LinkedInEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LinkedInEmbed {...args} />
    </div>
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof LinkedInEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <LinkedInEmbed {...args} />
  </EmbedToggler>
);

export const MainExample = MainExampleTemplate.bind({});
MainExample.args = {
  url,
  postUrl,
  width: 325,
  height: 570,
};

export const Size250x570AtMinWidth = ToggledOffTemplate.bind({});
Size250x570AtMinWidth.args = {
  url,
  postUrl,
  width: 250,
  height: 570,
};

export const Size400x570 = ToggledOffTemplate.bind({});
Size400x570.args = {
  url,
  postUrl,
  width: 400,
  height: 570,
};

export const Size600x650 = ToggledOffTemplate.bind({});
Size600x650.args = {
  url,
  postUrl,
  width: 600,
  height: 650,
};

export const Size150x570AtUnderMin = ToggledOffTemplate.bind({});
Size150x570AtUnderMin.args = {
  url,
  postUrl,
  width: 150,
  height: 570,
};

export const Width100Percent = ToggledOffTemplate.bind({});
Width100Percent.args = {
  url,
  postUrl,
  width: '100%',
  height: 570,
};

export const UrlOnly = ToggledOffTemplate.bind({});
UrlOnly.args = {
  url,
  postUrl,
};

export const WithPlaceholderImage = ToggledOffTemplate.bind({});
WithPlaceholderImage.args = {
  url,
  postUrl,
  width: 325,
  height: 570,
  placeholderImageUrl,
};

export const CustomPlaceholder = ToggledOffTemplate.bind({});
CustomPlaceholder.args = {
  url,
  postUrl,
  width: 325,
  height: 570,
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
  postUrl,
  width: 325,
  height: 570,
  linkText: 'Custom link text',
};

export const PlaceholderSpinnerDisabled = ToggledOffTemplate.bind({});
PlaceholderSpinnerDisabled.args = {
  url,
  postUrl,
  width: 325,
  height: 570,
  placeholderSpinnerDisabled: true,
};

export const PlaceholderDisabled = ToggledOffTemplate.bind({});
PlaceholderDisabled.args = {
  url,
  postUrl,
  width: 325,
  height: 570,
  placeholderDisabled: true,
};
