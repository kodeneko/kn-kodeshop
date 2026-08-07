import type { Meta, StoryObj } from "@storybook/react";
import '../../styles/global.css';
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags:["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Positive: Story = {
  args:{
    type: 'positive',
    label: '+ 20%',
  }
};

export const Negative: Story = {
  args:{
    type: 'negative',
    label: '- 20%',
  }
};
