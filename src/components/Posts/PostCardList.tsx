import { PostCard } from "./PostCard";

type Props = {
  posts: any[];
};

export const PostCardList = ({ posts = [] }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post: any, index: any) => (
        <div key={index}>
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
  );
}