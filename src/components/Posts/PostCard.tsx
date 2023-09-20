import { TagList } from "../Tags/TagList";
import Link from "next/link";

type Props = {
  title: string;
  tags: string[];
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export const PostCard = ({ title, tags, description, slug, createdAt, updatedAt }: Props) => {

  return (
    <div className='bg-zinc-800 rounded-md shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300 pb-2'>
      <Link href={`/posts/${slug}`}>
        <div className='text-white text-2xl pt-4 px-6 hover:underline'>
          {title}
        </div>
      </Link>
      <TagList tags={tags} />
      <div className='text-white text-sm pt-4 px-6'>
        { description }
      </div>
      <div className='flex text-white text-sm pt-4 px-6'>
        <div className='pr-4'>
          作成日：{formatDate(createdAt)}
        </div>
        {createdAt !== updatedAt && (
          <div>
            更新日：{formatDate(updatedAt)}
          </div>
        )}
      </div>
    </div>
  );
};

const formatDate = (date: string) => {
  const dateParts = date.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const formattedDate = `${year}年${month}月${day}日`;
  return formattedDate;
};