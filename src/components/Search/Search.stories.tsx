import { InputHTMLAttributes } from "react"
import { Story, Meta } from "@storybook/react"

import { Search } from "."

export default {
  title: "Components/Search",
  component: Search,
} as Meta

const Template: Story<InputHTMLAttributes<HTMLInputElement>> = (args) => (
  <Search {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: "Search (Press /)",
}
