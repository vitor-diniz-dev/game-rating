import type { Meta, StoryObj } from "@storybook/react";
import { GameCard } from "../components/GameCard/GameCard";
import "../index.css";

const meta: Meta<typeof GameCard> = {
  component: GameCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
