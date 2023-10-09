import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TikTokEmbed } from '../../components/embeds/TikTokEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/TikTokEmbed',
  component: TikTokEmbed,
} as ComponentMeta<typeof TikTokEmbed>;

const url = 'https://www.tiktok.com/@epicgardening/video/7055411162212633903';
const placeholderImageUrl = `https://placekitten.com/325/560`;

const MainExampleTemplate: ComponentStory<typeof TikTokEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TikTokEmbed {...args} />
    </div>
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof TikTokEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <TikTokEmbed {...args} />
  </EmbedToggler>
);

export const MainExample = MainExampleTemplate.bind({});
MainExample.args = {
  url,
  width: 325,
};

export const Width325AtMin = ToggledOffTemplate.bind({});
Width325AtMin.args = {
  url,
  width: 325,
};

export const Width400 = ToggledOffTemplate.bind({});
Width400.args = {
  url,
  width: 400,
};

export const Width480AtMax = ToggledOffTemplate.bind({});
Width480AtMax.args = {
  url,
  width: 480,
};

export const Width800AtOverMax = ToggledOffTemplate.bind({});
Width800AtOverMax.args = {
  url,
  width: 800,
};

export const Width150AtUnderMin = ToggledOffTemplate.bind({});
Width150AtUnderMin.args = {
  url,
  width: 150,
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

export const PlaceholderSpinnerDisabled = ToggledOffTemplate.bind({});
PlaceholderSpinnerDisabled.args = {
  url,
  width: 400,
  placeholderSpinnerDisabled: true,
};

export const PlaceholderDisabled = ToggledOffTemplate.bind({});
PlaceholderDisabled.args = {
  url,
  placeholderDisabled: true,
};
