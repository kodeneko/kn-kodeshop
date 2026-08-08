import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import '../../styles/global.css';
import CardQty from "./CardQty";
import Wrapper from "../../stories/Wrapper/Wrapper";
import { iconSet } from "../../icons/icons";

const meta: Meta<typeof CardQty> = {
  title: "Components/Card/Qty",
  component: CardQty,
  tags: ["autodocs"],

  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    }
  },
};

export default meta;

type Story = StoryObj<typeof CardQty>;

export const Default: Story = {
  args:{
    pic: 'coins',
    title: 'Incomes',
    onClickMenu: fn(),
    opts: [],
    label: '$ 1.000',
    tag: 'positive',
    tagLabel: '+ 10%',
    msgFooter: 'From last week'
  },
  decorators: [
    (Story) => {
      return <Wrapper><Story></Story></Wrapper>
    } 
  ]
};

