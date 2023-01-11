// [lock-all/] 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫
module.exports = {
  stories: [
    '../src/stories/core/1.README.stories.mdx', // default page
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    // '@storybook/addon-essentials', // https://storybook.js.org/docs/react/essentials/introduction
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    {
      name: '@storybook/addon-docs',
      // Support Markdown transclusion for README import - https://github.com/storybookjs/storybook/issues/7644
      options: { transcludeMarkdown: true },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
