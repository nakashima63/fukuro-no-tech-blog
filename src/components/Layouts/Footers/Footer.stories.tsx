import { StoryObj, Meta } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};