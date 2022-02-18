import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FacebookEmbed } from '../../components/embeds/FacebookEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Embeds/FacebookEmbed',
  component: FacebookEmbed,
} as ComponentMeta<typeof FacebookEmbed>;

const textUrl = 'https://www.facebook.com/andrewismusic/posts/483451443145971';
const photoUrl = 'https://www.facebook.com/andrewismusic/posts/451971596293956';
const linkUrl = 'https://www.facebook.com/andrewismusic/posts/479747760183006';
const videoUrl = 'https://fb.watch/bfP8U3LBa6/';
const placeholderImageUrl = `https://placekitten.com/325/560`;

const ToggledOnTemplate: ComponentStory<typeof FacebookEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <FacebookEmbed {...args} />
  </EmbedToggler>
);

const ToggledOffTemplate: ComponentStory<typeof FacebookEmbed> = (args) => (
  <EmbedToggler defaultToggledOn={typeof window !== 'undefined' && window.location.href.includes('localhost')}>
    <FacebookEmbed {...args} />
  </EmbedToggler>
);

export const Example = ToggledOnTemplate.bind({});
Example.args = {
  url: photoUrl,
  width: 325,
};

export const TextPostExample = ToggledOnTemplate.bind({});
TextPostExample.args = {
  url: textUrl,
  width: 325,
};

export const VideoPostExample = ToggledOnTemplate.bind({});
VideoPostExample.args = {
  url: videoUrl,
  width: 325,
};

export const LinkPostExampleWidth550 = ToggledOnTemplate.bind({});
LinkPostExampleWidth550.args = {
  url: linkUrl,
  width: 550,
};

export const FluidWidth = ToggledOffTemplate.bind({});
FluidWidth.args = {
  url: photoUrl,
  style: { maxWidth: 550 },
  width: '100%',
};

export const Width150 = ToggledOffTemplate.bind({});
Width150.args = {
  url: photoUrl,
  width: 150,
};

export const Width325 = ToggledOffTemplate.bind({});
Width325.args = {
  url: photoUrl,
  width: 325,
};

export const Width400 = ToggledOffTemplate.bind({});
Width400.args = {
  url: photoUrl,
  width: 400,
};

export const Width600 = ToggledOffTemplate.bind({});
Width600.args = {
  url: photoUrl,
  width: 600,
};

export const Width800 = ToggledOffTemplate.bind({});
Width800.args = {
  url: photoUrl,
  width: 800,
};

export const Width50Percent = ToggledOffTemplate.bind({});
Width50Percent.args = {
  url: photoUrl,
  width: '50%',
};

export const Width100Percent = ToggledOffTemplate.bind({});
Width100Percent.args = {
  url: photoUrl,
  width: '100%',
};

export const UrlOnly = ToggledOffTemplate.bind({});
UrlOnly.args = {
  url: photoUrl,
};

export const WithPlaceholderImage = ToggledOffTemplate.bind({});
WithPlaceholderImage.args = {
  url: photoUrl,
  width: 325,
  placeholderImageUrl,
};

export const CustomPlaceholder = ToggledOffTemplate.bind({});
CustomPlaceholder.args = {
  url: photoUrl,
  width: 325,
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
  url: photoUrl,
  width: 325,
  linkText: 'Custom link text',
};

export const PlaceholderDisabled = ToggledOffTemplate.bind({});
PlaceholderDisabled.args = {
  url: photoUrl,
  width: 325,
  placeholderDisabled: true,
};
