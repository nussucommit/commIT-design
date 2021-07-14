import React from "react"
import { addDecorator } from "@storybook/react"
import { ChakraProvider } from "@chakra-ui/react"

import "../src/commit-ui/assets/css/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((storyFn) => <ChakraProvider>{storyFn()}</ChakraProvider>)
