import React from "react";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

const Icon: Story<React.Component> = () => <h1>jaajak</h1>;

export default {
  title: "123/Header",
  component: Icon,
} as Meta;

const Template: Story<any> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
