import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "./index";

// This default export determines where your story goes in the story list
export default {
    title: "Atoms/Button",
    component: Button
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
    <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "Primary"
};
