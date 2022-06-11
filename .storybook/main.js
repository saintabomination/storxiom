module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
