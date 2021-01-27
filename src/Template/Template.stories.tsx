import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template as ComponentTemplate } from "./index";

// This default export determines where your story goes in the story list
export default {
  title: "Atoms/Template",
  component: ComponentTemplate,
} as Meta;

const Template: Story<ComponentProps<typeof ComponentTemplate>> = (args) => (
  <ComponentTemplate {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  children: "Hahahah",
};
