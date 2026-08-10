import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import '../../styles/global.css';
import CardGraph from "./CardGraph.tsx";
import Wrapper from "../../stories/Wrapper/Wrapper.tsx";
import { iconSet } from "../../icons";

const meta: Meta<typeof CardGraph> = {
  title: "Components/Card/Graph",
  component: CardGraph,
  tags: ["autodocs"],

  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    }
  },
};

export default meta;

type Story = StoryObj<typeof CardGraph>;

export const Default: Story = {
  args:{
    pic: 'shoopingbag',
    title: 'Total Sales',
    onClickMenu: fn(),
    opts: [],
  },
  decorators: [
    (Story) => {
      return <Wrapper><Story></Story></Wrapper>
    } 
  ]
};

