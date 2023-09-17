import { StoryObj, Meta } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startText: '前へ',
    endText: '次へ',
  },
};