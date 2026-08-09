import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import '../../styles/global.css';
import MainMenuOpt from "./MainMenuOpt";
import { iconSet } from "../../icons/icons";

const meta: Meta<typeof MainMenuOpt> = {
  title: "Components/MainMenu/Opt",
  component: MainMenuOpt,
  tags: ["autodocs"],
  
  args: {
    id: 'dashbard',
    pic: 'sqrs',
    label: 'Dashboard',
    active: false,
    onClick: fn()
  },

  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainMenuOpt>;

export const Default: Story = {
};

export const Active: Story = {
  args:{
    active: true
  }
};

export const Badge: Story = {
  args:{
    badge: 6
  }
};