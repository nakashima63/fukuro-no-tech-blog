import { StoryObj, Meta } from '@storybook/react';
import { PostCard } from './PostCard';

const meta: Meta<typeof PostCard> = {
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'タイトル',
    tags: ['タグ1', 'タグ2', 'タグ3'],
    description: '記事の説明です記事の説明です記事の説明です記事の説明です記事の説明です',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
};