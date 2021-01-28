import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Text } from "./index";

// This default export determines where your story goes in the story list
export default {
  title: "Atoms/Text",
  component: Text
} as Meta;

const Template: Story<ComponentProps<typeof Text>> = (args) => (
  <Text {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  children: "Hahahah"
};
