import { getAllPosts } from '@/libs/notionAPI';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/Layouts/Layout';
import { Container } from '@/components/Containers/Container';
import { Section } from '@/components/Sections/Section';
import { PostCard } from '@/components/Posts/PostCard';

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
        <Container>
          <Section title='最近の投稿'>
            <div>
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
          </Section>
        </Container>
      </Layout>
    </>
  );  
}
