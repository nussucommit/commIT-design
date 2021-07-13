const path = require("path")

module.exports = {
  stories: ["../src/@commitUI/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  // Need this in order for Chakra UI's styling to work on storybook
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
        },
      },
    }
  },
}
