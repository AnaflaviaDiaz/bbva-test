const config = {
  stories: ['../**/dist/stories/*.stories.{js,md,mdx}'],
  framework: {
    name: '@web/storybook-framework-web-components',
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials'
  ],
};

export default config;