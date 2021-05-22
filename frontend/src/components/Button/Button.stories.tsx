import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { Props } from ".";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
    type: "secondary",
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
    label: "Button",
    inverted: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Button",
    disabled: true,
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};