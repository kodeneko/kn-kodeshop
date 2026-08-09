import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import '../../styles/global.css';
import UserBar from "./UserBar";

const meta: Meta<typeof UserBar> = {
  title: "Components/UserBar",
  component: UserBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UserBar>;

export const Default: Story = {
  args:{
    username: 'Sonia G.',
    role: 'Admin',
    opts: [
      { pic: 'bell', onClick: fn() },
      { pic: 'goout', onClick: fn() }
    ]
  }
};

