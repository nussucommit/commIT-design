import React from "react"
import { Story, Meta } from "@storybook/react"

import { Input, ExtendedInputProps } from "."

export default {
  title: "Components/Input",
  component: Input,
} as Meta

const Template: Story<ExtendedInputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Label",
  autoFocus: false,
}

export const Error = Template.bind({})
Error.args = {
  label: "Label",
  error: "Error. Please try again.",
}
