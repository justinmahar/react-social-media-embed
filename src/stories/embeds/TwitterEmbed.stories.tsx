import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TwitterEmbed } from '../../components/embeds/TwitterEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/TwitterEmbed',
  component: TwitterEmbed,
} as ComponentMeta<typeof TwitterEmbed>;

const url = 'https://twitter.com/PixelAndBracket/status/1356633038717923333';
const placeholderImageUrl = `https://placekitten.com/550/325`;

const MainExampleTemplate: ComponentStory<typeof TwitterEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TwitterEmbed {...args} />
    </div>
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof TwitterEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <TwitterEmbed {...args} />
  </EmbedToggler>
);

export const MainExample = MainExampleTemplate.bind({});
MainExample.args = {
  url,
  width: 325,
};

export const FluidWidth = ToggledOffTemplate.bind({});
FluidWidth.args = {
  url,
  style: { maxWidth: 550 },
  width: '100%',
};

export const Width250AtMin = ToggledOffTemplate.bind({});
Width250AtMin.args = {
  url,
  width: 250,
};

export const Width400 = ToggledOffTemplate.bind({});
Width400.args = {
  url,
  width: 400,
};

export const Width550AtMax = ToggledOffTemplate.bind({});
Width550AtMax.args = {
  url,
  width: 550,
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
