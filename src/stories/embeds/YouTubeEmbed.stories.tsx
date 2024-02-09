import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { YouTubeEmbed } from '../../components/embeds/YouTubeEmbed';
import { MainExampleTemplate, ToggledOffTemplate } from '../Templates';

// === Setup ===
const StoryComponent = YouTubeEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Embeds/YouTubeEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const placeholderImageUrl = `https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=${Date.now()}`;

export const MainExample: Story = {
  args: {
    url,
    placeholderImageUrl,
    width: 325,
    height: 220,
  },
  decorators: [MainExampleTemplate],
};

export const Size100x100: Story = {
  args: {
    url,
    width: 100,
    height: 100,
  },
  decorators: [ToggledOffTemplate],
};

export const Size100x200: Story = {
  args: {
    url,
    width: 100,
    height: 200,
  },
  decorators: [ToggledOffTemplate],
};

export const Size200x100: Story = {
  args: {
    url,
    width: 200,
    height: 100,
  },
  decorators: [ToggledOffTemplate],
};

export const Size200x200: Story = {
  args: {
    url,
    width: 200,
    height: 200,
  },
  decorators: [ToggledOffTemplate],
};

export const Size200x400: Story = {
  args: {
    url,
    width: 200,
    height: 400,
  },
  decorators: [ToggledOffTemplate],
};

export const Size400x200: Story = {
  args: {
    url,
    width: 400,
    height: 200,
  },
  decorators: [ToggledOffTemplate],
};

export const Size400x600: Story = {
  args: {
    url,
    width: 400,
    height: 600,
  },
  decorators: [ToggledOffTemplate],
};

export const Size600x400: Story = {
  args: {
    url,
    width: 600,
    height: 400,
  },
  decorators: [ToggledOffTemplate],
};

export const Width100: Story = {
  args: {
    url,
    width: 100,
  },
  decorators: [ToggledOffTemplate],
};

export const Width200: Story = {
  args: {
    url,
    width: 200,
  },
  decorators: [ToggledOffTemplate],
};

export const Width400: Story = {
  args: {
    url,
    width: 400,
  },
  decorators: [ToggledOffTemplate],
};

export const Width800: Story = {
  args: {
    url,
    width: 800,
  },
  decorators: [ToggledOffTemplate],
};

export const Width50Percent: Story = {
  args: {
    url,
    width: '50%',
  },
  decorators: [ToggledOffTemplate],
};

export const Width100Percent: Story = {
  args: {
    url,
    width: '100%',
  },
  decorators: [ToggledOffTemplate],
};

export const YouTubeShorts: Story = {
  args: {
    url: 'https://www.youtube.com/shorts/zJY7NIzOmC8',
    width: 225,
    height: 400,
  },
  decorators: [ToggledOffTemplate],
};

export const UrlOnly: Story = {
  args: {
    url,
  },
  decorators: [ToggledOffTemplate],
};

export const WithPlaceholderImage: Story = {
  args: {
    url,
    placeholderImageUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholder: Story = {
  args: {
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
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholderLinkText: Story = {
  args: {
    url,
    linkText: 'Custom link text',
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderSpinnerDisabled: Story = {
  args: {
    url,
    width: 400,
    placeholderSpinnerDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderDisabled: Story = {
  args: {
    url,
    placeholderDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};
