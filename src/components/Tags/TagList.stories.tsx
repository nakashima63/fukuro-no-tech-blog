import { StoryObj, Meta } from '@storybook/react';
import { TagList } from './TagList';

const meta: Meta<typeof TagList> = {
  component: TagList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: ['タグ1', 'タグ2', 'タグ3'],
  },
};