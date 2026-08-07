import type { Meta, StoryObj } from "@storybook/react";
import '../../styles/global.css';
import Avatar from "./Avatar";
import { iconSet } from "../../icons/icons";


const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  
  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    },
  },
};


export default meta;


type Story = StoryObj<typeof Avatar>;


export const Positive: Story = {
  args:{
    pic: 'tshirt'
  }
};

