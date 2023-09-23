import Link from 'next/link';

type Props = {
  numberOfPage: number;
  tag: string;
};

export const Pagination = ({ numberOfPage, tag }: Props) => {
  const pages = [];

  for(let i = 1; i <= numberOfPage; i++){
    pages.push(i);
  }

  return (
    <section className="lg:w-1/2 mx-auto rouded-md p-5">
      <ul className="flex items-center justify-center gap-6">
        {pages.map((page) => (
          <li key={page} className='bg-zinc-800 border-rose-500 hover:bg-rose-500 w-6 h-8 relative'>
            <Link href={getPageLink(tag, page)} className='text-xs absolute top-2/4 -translate-x-2/4 left-2/4 -translate-y-2/4 text-white'>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getPageLink = (tag: string, page: number) => {
  return tag ? `/posts/tag/${tag}/page/${page}` : `/posts/page/${page}`;
};