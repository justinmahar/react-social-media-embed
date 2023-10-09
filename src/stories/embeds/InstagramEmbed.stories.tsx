import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InstagramEmbed } from '../../components/embeds/InstagramEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/InstagramEmbed',
  component: InstagramEmbed,
} as ComponentMeta<typeof InstagramEmbed>;

const url = 'https://www.instagram.com/p/CUbHfhpswxt/';
const placeholderImageUrl = `https://placekitten.com/540/400`;

const MainExampleTemplate: ComponentStory<typeof InstagramEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed {...args} />
    </div>
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof InstagramEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <InstagramEmbed {...args} />
  </EmbedToggler>
);

export const MainExample = MainExampleTemplate.bind({});
MainExample.args = {
  url,
  width: 328,
};

export const FluidWidth = ToggledOffTemplate.bind({});
FluidWidth.args = {
  url,
  style: { maxWidth: 550 },
  width: '100%',
};

export const Width328AtMin = ToggledOffTemplate.bind({});
Width328AtMin.args = {
  url,
  width: 328,
};

export const Width400 = ToggledOffTemplate.bind({});
Width400.args = {
  url,
  width: 400,
};

export const Width600 = ToggledOffTemplate.bind({});
Width600.args = {
  url,
  width: 600,
};

export const Width800 = ToggledOffTemplate.bind({});
Width800.args = {
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
  width: 400,
  placeholderImageUrl,
};

export const CustomPlaceholder = ToggledOffTemplate.bind({});
CustomPlaceholder.args = {
  url,
  width: 400,
  embedPlaceholder: (
    <div
      style={{
        width: 328,
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
  width: 400,
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
  width: 400,
  placeholderDisabled: true,
};
