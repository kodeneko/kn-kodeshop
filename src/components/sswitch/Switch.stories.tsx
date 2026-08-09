import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import '../../styles/global.css';
import Switch from "./Switch.tsx";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Theme: Story = {
  args:{
    val: false,
    onClick: fn(),
    picLeft: 'moon',
    picRight: 'sun',
  }
};

