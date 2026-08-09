import type { Meta, StoryObj } from "@storybook/react";
import '../../styles/global.css';
import MainMenu from "./MainMenu";
import { mainMenuOpts } from "../global";

const meta: Meta<typeof MainMenu> = {
  title: "Components/MainMenu/Menu",
  component: MainMenu,
  tags: ["autodocs"],

  argTypes: {
    options: {
      control: 'object',
      description: "Option list",
    },
  },
  args:{
    options: mainMenuOpts
  },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {};
