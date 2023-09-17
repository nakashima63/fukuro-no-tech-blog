import { Tag } from './Tag';

type Props = {
  tags: string[];
};

export const TagList = ({ tags }: Props) => {
  return (
    <div className='flex gap-2 pt-4 px-6'>
      {tags.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))}
    </div>
  );
};