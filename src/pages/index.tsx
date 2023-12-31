import { GetStaticProps } from 'next';
import { getAllPosts } from '@/libs/notionAPI';
import { Layout } from '@/components/Layouts/Layout';
import { Container } from '@/components/Containers/Container';
import { Section } from '@/components/Sections/Section';
import { PostCardList } from '@/components/Posts/PostCardList';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 60,
  };
};

export default function Home({ allPosts }: any) {
  return (
    <Layout>
      <Container>
        <Section title='投稿一覧'>
          <PostCardList posts={allPosts} />
        </Section>
      </Container>
    </Layout>
  );  
};
