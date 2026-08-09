import type { Meta, StoryObj } from "@storybook/react";
import { fn } from 'storybook/test';
import '../../styles/global.css';
import CardDefault from "./CardDefault";
import Wrapper from "../../stories/Wrapper/Wrapper";
import { iconSet } from "../../icons";

const meta: Meta<typeof CardDefault> = {
  title: "Components/Card/Default",
  component: CardDefault,
  tags: ["autodocs"],

  argTypes: {
    pic: {
      control: "select",
      options: Object.keys(iconSet),
    },
    body: {
      control: false,
      description: "Contenido del cuerpo de la tarjeta",
    },
    footer: {
      control: false,
      description: "Pie de página de la tarjeta",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardDefault>;

const BodyDefault = () => <p>I'm a body</p>
const FooterDefault = () => <p>I'm a footer</p>

export const Default: Story = {
  args:{
    pic: 'tshirt',
    title: 'Title',
    onClickMenu: fn(),
    body: <BodyDefault />,
    footer: <FooterDefault />,
  },
  decorators: [
    (Story) => {
      return <Wrapper><Story></Story></Wrapper>
    } 
  ]
};

