import { StoryObj, Meta } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};