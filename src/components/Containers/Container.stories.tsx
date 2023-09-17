import { StoryObj, Meta } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className='bg-black py-2 text-center text-white'>コンテナ</div>,
  },
};