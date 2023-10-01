import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllTags, getPostsByTag } from '@/libs/notionAPI';
import { Layout } from '@/components/Layouts/Layout';
import { Container } from '@/components/Containers/Container';
import { Section } from '@/components/Sections/Section';
import { PostCardList } from '@/components/Posts/PostCardList';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';

interface Params extends ParsedUrlQuery {
  tag: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const allTags = await getAllTags();
  const paths = allTags.map((tag) => ({ params: { tag } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tag = context.params?.tag?.toString() ?? '';
  const posts = await getPostsByTag(tag);

  return {
    props: {
      tag,
      posts,
    },
    revalidate: 60 * 60 * 6,
  };
};

const TagPage = ({ posts, tag }: any) => {
  return (
    <Layout>
      <Container>
        <Section title='カテゴリ：' tag={tag}>
          <PostCardList
            posts={posts}
          />
        </Section>
        <div className='text-white pb-4 hover:underline'>
          <Link href='/'>←ホームに戻る</Link>
        </div>
      </Container>
    </Layout>
  );
};

export default TagPage;