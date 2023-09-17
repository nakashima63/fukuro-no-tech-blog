import { StoryObj, Meta } from '@storybook/react';
import { PostCardList } from './PostCardList';

const meta: Meta<typeof PostCardList> = {
  component: PostCardList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    posts: [
      {
        title: 'タイトル1',
        tags: ['タグ1', 'タグ2', 'タグ3'],
        description: '記事の説明です記事の説明です記事の説明です記事の説明です記事の説明です',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      {
        title: 'タイトル2',
        tags: ['タグ1', 'タグ2', 'タグ3'],
        description: '記事の説明です記事の説明です記事の説明です記事の説明です記事の説明です',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      {
        title: 'タイトル3',
        tags: ['タグ1', 'タグ2', 'タグ3'],
        description: '記事の説明です記事の説明です記事の説明です記事の説明です記事の説明です',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
    ],
  },
};