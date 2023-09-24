import React from 'react';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/libs/notionAPI';
import { Layout } from '@/components/Layouts/Layout';
import { Container } from '@/components/Containers/Container';
import { PostContent } from '@/components/Posts/PostContent';

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 6,
  };
};

const PostContentPage = ({post}: any) => {
  return (
    <Layout>
      <div className='my-4'>
        <Container>
          <PostContent 
            title={post.metadata.title}
            tags={post.metadata.tags}
            createdAt={post.metadata.createdAt}
            updatedAt={post.metadata.updatedAt}
            content={post.markdown.parent}
          />
          <div className='text-white pt-4 hover:underline'>
            <Link href='/'>←戻る</Link>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default PostContentPage;