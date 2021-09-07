import React from "react"
import { Story, Meta } from "@storybook/react"

import { TextArea, ExtendedTextAreaProps } from "."

export default {
  title: "Components/Text Area",
  component: TextArea,
} as Meta

const Template: Story<ExtendedTextAreaProps> = (args) => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Text Area",
}
