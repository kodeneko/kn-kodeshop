import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "storybook/test";
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
    options: mainMenuOpts.map((op, i) => ({
      ...op,
      label: op.id,
      active: i === 0,
      onClick: fn()
    })),
    onClick: fn()
  },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const productsOpt = await canvas.getByTestId('main-menu-opt-products');
    const productsOptCompo = productsOpt.querySelector('div') as HTMLElement;
    await userEvent.click(productsOptCompo);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const reportsOpt = (await canvas.getByTestId('main-menu-opt-reports'));
    const reportsOptCompo = reportsOpt.querySelector('div') as HTMLElement;
    await userEvent.click(reportsOptCompo);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const dashboardOpt = (await canvas.getByTestId('main-menu-opt-dashboard'));
    const dashboardOptCompo = dashboardOpt.querySelector('div') as HTMLElement;
    await userEvent.click(dashboardOptCompo);
  }
};