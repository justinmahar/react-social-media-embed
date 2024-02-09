import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FacebookEmbed } from '../../components/embeds/FacebookEmbed';
import { MainExampleTemplate, ToggledOffTemplate } from '../Templates';

// === Setup ===
const StoryComponent = FacebookEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Embeds/FacebookEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const textUrl = 'https://www.facebook.com/andrewismusic/posts/483451443145971';
const photoUrl = 'https://www.facebook.com/andrewismusic/posts/451971596293956';
const linkUrl = 'https://www.facebook.com/andrewismusic/posts/479747760183006';
const videoUrl = 'https://fb.watch/bfP8U3LBa6/';
const placeholderImageUrl = `https://placekitten.com/325/560`;

export const MainExample: Story = {
  args: {
    url: photoUrl,
    width: 325,
  },
  decorators: [MainExampleTemplate],
};

export const TextPostExample: Story = {
  args: {
    url: textUrl,
    width: 325,
  },
  decorators: [ToggledOffTemplate],
};

export const VideoPostExample: Story = {
  args: {
    url: videoUrl,
    width: 325,
  },
  decorators: [ToggledOffTemplate],
};

export const LinkPostExampleWidth550: Story = {
  args: {
    url: linkUrl,
    width: 550,
  },
  decorators: [ToggledOffTemplate],
};

export const FluidWidth: Story = {
  args: {
    url: photoUrl,
    style: { maxWidth: 550 },
    width: '100%',
  },
  decorators: [ToggledOffTemplate],
};

export const Width150: Story = {
  args: {
    url: photoUrl,
    width: 150,
  },
  decorators: [ToggledOffTemplate],
};

export const Width325: Story = {
  args: {
    url: photoUrl,
    width: 325,
  },
  decorators: [ToggledOffTemplate],
};

export const Width400: Story = {
  args: {
    url: photoUrl,
    width: 400,
  },
  decorators: [ToggledOffTemplate],
};

export const Width600: Story = {
  args: {
    url: photoUrl,
    width: 600,
  },
  decorators: [ToggledOffTemplate],
};

export const Width800: Story = {
  args: {
    url: photoUrl,
    width: 800,
  },
  decorators: [ToggledOffTemplate],
};

export const Width50Percent: Story = {
  args: {
    url: photoUrl,
    width: '50%',
  },
  decorators: [ToggledOffTemplate],
};

export const Width100Percent: Story = {
  args: {
    url: photoUrl,
    width: '100%',
  },
  decorators: [ToggledOffTemplate],
};

export const UrlOnly: Story = {
  args: {
    url: photoUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const WithPlaceholderImage: Story = {
  args: {
    url: photoUrl,
    width: 325,
    placeholderImageUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholder: Story = {
  args: {
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
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholderLinkText: Story = {
  args: {
    url: photoUrl,
    width: 325,
    linkText: 'Custom link text',
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderSpinnerDisabled: Story = {
  args: {
    url: photoUrl,
    width: 325,
    placeholderSpinnerDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderDisabled: Story = {
  args: {
    url: photoUrl,
    width: 325,
    placeholderDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};
