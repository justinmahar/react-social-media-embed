import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { XEmbed } from '../../components/embeds/XEmbed';
import { MainExampleTemplate, ToggledOffTemplate } from '../Templates';

// === Setup ===
const StoryComponent = XEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Embeds/XEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const url = 'https://twitter.com/PixelAndBracket/status/1356633038717923333';
const placeholderImageUrl = `https://placekitten.com/550/325`;

export const MainExample: Story = {
  args: {
    url,
    width: 325,
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

export const Width250AtMin: Story = {
  args: {
    url,
    width: 250,
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

export const Width550AtMax: Story = {
  args: {
    url,
    width: 550,
  },
  decorators: [ToggledOffTemplate],
};

export const Width800AtOverMax: Story = {
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
