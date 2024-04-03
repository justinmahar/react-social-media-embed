import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InstagramEmbed } from '../../components/embeds/InstagramEmbed';
import { MainExampleTemplate, ToggledOffTemplate } from '../Templates';

// === Setup ===
const StoryComponent = InstagramEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Embeds/InstagramEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const url = 'https://www.instagram.com/p/CUbHfhpswxt/';
const placeholderImageUrl = `https://placekitten.com/540/400`;

export const MainExample: Story = {
  args: {
    url,
    width: 328,
  },
  decorators: [MainExampleTemplate],
};

export const MainExampleWithCaptions: Story = {
  args: {
    url,
    width: 328,
    captioned: true,
  },
  decorators: [MainExampleTemplate],
};

export const FluidWidth: Story = {
  args: {
    url,
    style: { maxWidth: 550 },
    width: '100%',
  },
  decorators: [ToggledOffTemplate],
};

export const Width328AtMin: Story = {
  args: {
    url,
    width: 328,
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

export const Width600: Story = {
  args: {
    url,
    width: 600,
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

export const Width150AtUnderMin: Story = {
  args: {
    url,
    width: 150,
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

export const UrlOnly: Story = {
  args: {
    url,
  },
  decorators: [ToggledOffTemplate],
};

export const WithPlaceholderImage: Story = {
  args: {
    url,
    width: 400,
    placeholderImageUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholder: Story = {
  args: {
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
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholderLinkText: Story = {
  args: {
    url,
    width: 400,
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
    width: 400,
    placeholderDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};
