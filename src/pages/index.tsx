import { getAllPosts } from '@/libs/notionAPI';
import { GetStaticProps } from 'next';
import { PostCard } from '@/components/Posts/PostCard';
import { Layout } from '@/components/Layouts/Layout';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
};

export default function Home({ allPosts }: any) {
  return (
    <>
      <Layout>
        <div className='w-full max-w-[832px] mx-auto px-4'>
          <div className='text-white text-2xl py-4'>投稿一覧</div>
          <div className=''>
            {allPosts.map((post: any, index: any) => (
              <div className='pb-4' key={index}>
                <PostCard
                  title={post.title}
                  tags={post.tags}
                  description={post.description}
                  slug={post.slug}
                  createdAt={post.createdAt}
                  updatedAt={post.updatedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );  
}
