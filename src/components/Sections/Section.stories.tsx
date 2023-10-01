import { StoryObj, Meta } from '@storybook/react';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '投稿一覧',
  },
};

export const HasTags: Story = {
  args: {
    title: 'カテゴリ：',
    tag: 'タグ１',
  },
};

