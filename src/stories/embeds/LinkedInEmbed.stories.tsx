import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LinkedInEmbed } from '../../components/embeds/LinkedInEmbed';
import { MainExampleTemplate, ToggledOffTemplate } from '../Templates';

// === Setup ===
const StoryComponent = LinkedInEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Embeds/LinkedInEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const url = 'https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384';
const postUrl =
  'https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7';
const placeholderImageUrl = `https://placekitten.com/504/325`;

export const MainExample: Story = {
  args: {
    url,
    postUrl,
    width: 325,
    height: 570,
  },
  decorators: [MainExampleTemplate],
};

export const Size250x570AtMinWidth: Story = {
  args: {
    url,
    postUrl,
    width: 250,
    height: 570,
  },
  decorators: [ToggledOffTemplate],
};

export const Size400x570: Story = {
  args: {
    url,
    postUrl,
    width: 400,
    height: 570,
  },
  decorators: [ToggledOffTemplate],
};

export const Size600x650: Story = {
  args: {
    url,
    postUrl,
    width: 600,
    height: 650,
  },
  decorators: [ToggledOffTemplate],
};

export const Size150x570AtUnderMin: Story = {
  args: {
    url,
    postUrl,
    width: 150,
    height: 570,
  },
  decorators: [ToggledOffTemplate],
};

export const Width100Percent: Story = {
  args: {
    url,
    postUrl,
    width: '100%',
    height: 570,
  },
  decorators: [ToggledOffTemplate],
};

export const UrlOnly: Story = {
  args: {
    url,
    postUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const WithPlaceholderImage: Story = {
  args: {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderImageUrl,
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholder: Story = {
  args: {
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
  },
  decorators: [ToggledOffTemplate],
};

export const CustomPlaceholderLinkText: Story = {
  args: {
    url,
    postUrl,
    width: 325,
    height: 570,
    linkText: 'Custom link text',
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderSpinnerDisabled: Story = {
  args: {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderSpinnerDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};

export const PlaceholderDisabled: Story = {
  args: {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderDisabled: true,
  },
  decorators: [ToggledOffTemplate],
};
