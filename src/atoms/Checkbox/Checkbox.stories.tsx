import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Checkbox } from ".";

// This default export determines where your story goes in the story list
export default {
  title: "Atoms/Checkbox",
  component: Checkbox
} as Meta;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  label: "This is sample checkbox"
};
