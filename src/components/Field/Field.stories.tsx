import type { Meta, StoryObj } from "@storybook/react";
import '../../styles/global.css';
import Field from "./Field.tsx";
import { iconSet } from "../../icons";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],

  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Search: Story = {
  args: {
    pic: 'magni',
    placeholder: "Search orders, products or customers"
  }
};

