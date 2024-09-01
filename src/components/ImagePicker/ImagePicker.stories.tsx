import type { Meta, StoryObj } from "@storybook/react";
import ImagePicker from "./ImagePicker";

const meta: Meta<typeof ImagePicker> = {
  title: "Components/ImagePicker",
  component: ImagePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Picker: Story = {
  args: {},
};
