import { StoryObj, Meta } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'タグ',
  },
  render: (args) => <div className='flex'><Tag {...args} /></div>,
};