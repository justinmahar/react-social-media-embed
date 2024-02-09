import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlaceholderEmbed } from '../../components/placeholder/PlaceholderEmbed';
import ClipLoader from 'react-spinners/ClipLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { ToggledOnTemplate } from '../Templates';

// === Setup ===
const StoryComponent = PlaceholderEmbed; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Placeholder/PlaceholderEmbed', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
  decorators: [ToggledOnTemplate],
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const landscapeImageUrl = 'https://placekitten.com/550/325';
const portraitImageUrl = 'https://placekitten.com/325/550';

export const MainExample: Story = {
  args: {
    url,
    linkText: 'View post on Splosher',
    style: {
      width: 400,
      height: 320,
    },
  },
};

export const TextWidthHeight100x100: Story = {
  args: {
    url,
    style: {
      width: 100,
      height: 100,
    },
  },
};

export const TextWidthHeight200x200: Story = {
  args: {
    url,
    style: {
      width: 200,
      height: 200,
    },
  },
};

export const TextWidthHeight400x200: Story = {
  args: {
    url,
    style: {
      width: 400,
      height: 200,
    },
  },
};

export const TextWidthHeight200x400: Story = {
  args: {
    url,
    style: {
      width: 200,
      height: 400,
    },
  },
};

export const TextWidthHeight600x400: Story = {
  args: {
    url,
    style: {
      width: 600,
      height: 400,
    },
  },
};

export const TextWidthHeight400x600: Story = {
  args: {
    url,
    style: {
      width: 400,
      height: 600,
    },
  },
};

export const TextWidth100: Story = {
  args: {
    url,
    style: {
      width: 100,
    },
  },
};

export const TextWidth200: Story = {
  args: {
    url,
    style: {
      width: 200,
    },
  },
};

export const TextWidth400: Story = {
  args: {
    url,
    style: {
      width: 400,
    },
  },
};

export const TextWidth800: Story = {
  args: {
    url,
    style: {
      width: 800,
    },
  },
};

export const TextHeight100: Story = {
  args: {
    url,
    style: {
      height: 100,
    },
  },
};

export const TextHeight200: Story = {
  args: {
    url,
    style: {
      height: 200,
    },
  },
};

export const TextHeight400: Story = {
  args: {
    url,
    style: {
      height: 400,
    },
  },
};

export const TextHeight800: Story = {
  args: {
    url,
    style: {
      height: 800,
    },
  },
};

export const TextNoSizing: Story = {
  args: {
    url,
  },
};

export const LandscapeImageWidthHeight100x100: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 100,
      height: 100,
    },
  },
};

export const LandscapeImageWidthHeight200x200: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 200,
      height: 200,
    },
  },
};

export const LandscapeImageWidthHeight400x200: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 400,
      height: 200,
    },
  },
};

export const LandscapeImageWidthHeight200x400: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 200,
      height: 400,
    },
  },
};

export const LandscapeImageWidthHeight600x400: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 600,
      height: 400,
    },
  },
};

export const LandscapeImageWidthHeight400x600: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 400,
      height: 600,
    },
  },
};
export const LandscapeImageWidth100: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 100,
    },
  },
};

export const LandscapeImageWidth200: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 200,
    },
  },
};

export const LandscapeImageWidth400: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 400,
    },
  },
};

export const LandscapeImageWidth800: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      width: 800,
    },
  },
};

export const LandscapeImageHeight100: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      height: 100,
    },
  },
};

export const LandscapeImageHeight200: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      height: 200,
    },
  },
};

export const LandscapeImageHeight400: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      height: 400,
    },
  },
};

export const LandscapeImageHeight800: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    style: {
      height: 800,
    },
  },
};

export const LandscapeImageNoSizing: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
  },
};

export const PortraitImageWidthHeight100x100: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 100,
      height: 100,
    },
  },
};

export const PortraitImageWidthHeight200x200: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 200,
      height: 200,
    },
  },
};

export const PortraitImageWidthHeight400x200: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 400,
      height: 200,
    },
  },
};

export const PortraitImageWidthHeight200x400: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 200,
      height: 400,
    },
  },
};

export const PortraitImageWidthHeight600x400: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 600,
      height: 400,
    },
  },
};

export const PortraitImageWidthHeight400x600: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 400,
      height: 600,
    },
  },
};
export const PortraitImageWidth100: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 100,
    },
  },
};

export const PortraitImageWidth200: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 200,
    },
  },
};

export const PortraitImageWidth400: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 400,
    },
  },
};

export const PortraitImageWidth800: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      width: 800,
    },
  },
};

export const PortraitImageHeight100: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      height: 100,
    },
  },
};

export const PortraitImageHeight200: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      height: 200,
    },
  },
};

export const PortraitImageHeight400: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      height: 400,
    },
  },
};

export const PortraitImageHeight800: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
    style: {
      height: 800,
    },
  },
};

export const PortraitImageNoSizing: Story = {
  args: {
    url,
    imageUrl: portraitImageUrl,
  },
};

export const TextWithSpinnerDisabled: Story = {
  args: {
    url,
    spinnerDisabled: true,
    style: {
      width: 400,
      height: 300,
    },
  },
};

export const ImageWithSpinnerDisabled: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    spinnerDisabled: true,
    style: {
      width: 400,
    },
  },
};

export const TextWithCustomSpinner: Story = {
  args: {
    url,
    spinner: <ClipLoader color="black" size={15} />,
    style: {
      width: 400,
      height: 300,
    },
  },
};

export const ImageWithCustomSpinner: Story = {
  args: {
    url,
    imageUrl: landscapeImageUrl,
    spinner: <ScaleLoader color="black" height={10} width={2} />,
    style: {
      width: 400,
    },
  },
};
