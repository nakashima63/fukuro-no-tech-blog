import { StoryObj, Meta } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className='py-2 text-center text-white'>コンテンツ</div>,
  },
};

