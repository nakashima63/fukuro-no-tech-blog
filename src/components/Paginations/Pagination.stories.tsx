import { StoryObj, Meta } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numberOfPage: 1,
    tag: 'タグ',
  },
};