import { Tag } from './Tag';
import Link from 'next/link';

type Props = {
  tags: string[];
};

export const TagList = ({ tags }: Props) => {
  return (
    <div className='flex gap-2 pt-4 px-6'>
      {tags.map((tag, index) => (
        <Link href={`/tags/${tag}`} key={index}>
          <Tag text={tag} />
        </Link>
      ))}
    </div>
  );
};