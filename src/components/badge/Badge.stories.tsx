import type { Meta, StoryObj } from "@storybook/react";
import '../../styles/global.css';
import Badge from "./Badge.tsx";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Positive: Story = {
  args:{
    val: 6
  }
};

