/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PlaceholderEmbed } from '../../components/placeholder/PlaceholderEmbed';
import { EmbedToggler } from '../EmbedToggler';

export default {
  title: 'Placeholder/PlaceholderEmbed',
  component: PlaceholderEmbed,
} as ComponentMeta<typeof PlaceholderEmbed>;

const Template: ComponentStory<typeof PlaceholderEmbed> = (args) => (
  <EmbedToggler defaultToggledOn>
    <PlaceholderEmbed {...args} />
  </EmbedToggler>
);

const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const landscapeImageUrl = 'https://placekitten.com/550/325';
const portraitImageUrl = 'https://placekitten.com/325/550';

export const Example = Template.bind({});
Example.args = {
  url,
  linkText: 'View post on Splosher',
  style: {
    width: 400,
    height: 320,
  },
};

export const TextWidthHeight100x100 = Template.bind({});
TextWidthHeight100x100.args = {
  url,
  style: {
    width: 100,
    height: 100,
  },
};

export const TextWidthHeight200x200 = Template.bind({});
TextWidthHeight200x200.args = {
  url,
  style: {
    width: 200,
    height: 200,
  },
};

export const TextWidthHeight400x200 = Template.bind({});
TextWidthHeight400x200.args = {
  url,
  style: {
    width: 400,
    height: 200,
  },
};

export const TextWidthHeight200x400 = Template.bind({});
TextWidthHeight200x400.args = {
  url,
  style: {
    width: 200,
    height: 400,
  },
};

export const TextWidthHeight600x400 = Template.bind({});
TextWidthHeight600x400.args = {
  url,
  style: {
    width: 600,
    height: 400,
  },
};

export const TextWidthHeight400x600 = Template.bind({});
TextWidthHeight400x600.args = {
  url,
  style: {
    width: 400,
    height: 600,
  },
};

export const TextWidth100 = Template.bind({});
TextWidth100.args = {
  url,
  style: {
    width: 100,
  },
};

export const TextWidth200 = Template.bind({});
TextWidth200.args = {
  url,
  style: {
    width: 200,
  },
};

export const TextWidth400 = Template.bind({});
TextWidth400.args = {
  url,
  style: {
    width: 400,
  },
};

export const TextWidth800 = Template.bind({});
TextWidth800.args = {
  url,
  style: {
    width: 800,
  },
};

export const TextHeight100 = Template.bind({});
TextHeight100.args = {
  url,
  style: {
    height: 100,
  },
};

export const TextHeight200 = Template.bind({});
TextHeight200.args = {
  url,
  style: {
    height: 200,
  },
};

export const TextHeight400 = Template.bind({});
TextHeight400.args = {
  url,
  style: {
    height: 400,
  },
};

export const TextHeight800 = Template.bind({});
TextHeight800.args = {
  url,
  style: {
    height: 800,
  },
};

export const TextNoSizing = Template.bind({});
TextNoSizing.args = {
  url,
};

export const LandscapeImageWidthHeight100x100 = Template.bind({});
LandscapeImageWidthHeight100x100.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 100,
    height: 100,
  },
};

export const LandscapeImageWidthHeight200x200 = Template.bind({});
LandscapeImageWidthHeight200x200.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 200,
    height: 200,
  },
};

export const LandscapeImageWidthHeight400x200 = Template.bind({});
LandscapeImageWidthHeight400x200.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 400,
    height: 200,
  },
};

export const LandscapeImageWidthHeight200x400 = Template.bind({});
LandscapeImageWidthHeight200x400.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 200,
    height: 400,
  },
};

export const LandscapeImageWidthHeight600x400 = Template.bind({});
LandscapeImageWidthHeight600x400.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 600,
    height: 400,
  },
};

export const LandscapeImageWidthHeight400x600 = Template.bind({});
LandscapeImageWidthHeight400x600.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 400,
    height: 600,
  },
};
export const LandscapeImageWidth100 = Template.bind({});
LandscapeImageWidth100.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 100,
  },
};

export const LandscapeImageWidth200 = Template.bind({});
LandscapeImageWidth200.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 200,
  },
};

export const LandscapeImageWidth400 = Template.bind({});
LandscapeImageWidth400.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 400,
  },
};

export const LandscapeImageWidth800 = Template.bind({});
LandscapeImageWidth800.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    width: 800,
  },
};

export const LandscapeImageHeight100 = Template.bind({});
LandscapeImageHeight100.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    height: 100,
  },
};

export const LandscapeImageHeight200 = Template.bind({});
LandscapeImageHeight200.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    height: 200,
  },
};

export const LandscapeImageHeight400 = Template.bind({});
LandscapeImageHeight400.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    height: 400,
  },
};

export const LandscapeImageHeight800 = Template.bind({});
LandscapeImageHeight800.args = {
  url,
  imageUrl: landscapeImageUrl,
  style: {
    height: 800,
  },
};

export const LandscapeImageNoSizing = Template.bind({});
LandscapeImageNoSizing.args = {
  url,
  imageUrl: landscapeImageUrl,
};

export const PortraitImageWidthHeight100x100 = Template.bind({});
PortraitImageWidthHeight100x100.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 100,
    height: 100,
  },
};

export const PortraitImageWidthHeight200x200 = Template.bind({});
PortraitImageWidthHeight200x200.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 200,
    height: 200,
  },
};

export const PortraitImageWidthHeight400x200 = Template.bind({});
PortraitImageWidthHeight400x200.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 400,
    height: 200,
  },
};

export const PortraitImageWidthHeight200x400 = Template.bind({});
PortraitImageWidthHeight200x400.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 200,
    height: 400,
  },
};

export const PortraitImageWidthHeight600x400 = Template.bind({});
PortraitImageWidthHeight600x400.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 600,
    height: 400,
  },
};

export const PortraitImageWidthHeight400x600 = Template.bind({});
PortraitImageWidthHeight400x600.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 400,
    height: 600,
  },
};
export const PortraitImageWidth100 = Template.bind({});
PortraitImageWidth100.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 100,
  },
};

export const PortraitImageWidth200 = Template.bind({});
PortraitImageWidth200.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 200,
  },
};

export const PortraitImageWidth400 = Template.bind({});
PortraitImageWidth400.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 400,
  },
};

export const PortraitImageWidth800 = Template.bind({});
PortraitImageWidth800.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    width: 800,
  },
};

export const PortraitImageHeight100 = Template.bind({});
PortraitImageHeight100.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    height: 100,
  },
};

export const PortraitImageHeight200 = Template.bind({});
PortraitImageHeight200.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    height: 200,
  },
};

export const PortraitImageHeight400 = Template.bind({});
PortraitImageHeight400.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    height: 400,
  },
};

export const PortraitImageHeight800 = Template.bind({});
PortraitImageHeight800.args = {
  url,
  imageUrl: portraitImageUrl,
  style: {
    height: 800,
  },
};

export const PortraitImageNoSizing = Template.bind({});
PortraitImageNoSizing.args = {
  url,
  imageUrl: portraitImageUrl,
};
