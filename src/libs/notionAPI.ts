import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async (): Promise<any[]> => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    page_size: 100,
  });

  const allPosts: any[] = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post: any) => {

  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name;
    });

    return allTags;
  }

  return {
    id : post.id,
    title: post.properties.title.rich_text[0]?.plain_text || '',
    description: post.properties.description.rich_text[0]?.plain_text || '',
    tags: getTags(post.properties.tag.multi_select) || [],
    slug: post.properties.slug.rich_text[0]?.plain_text || '',
    published: post.properties.published.checkbox || false,
    createdAt: post.properties.created_at.date?.start || '',
    updatedAt: post.properties.updated_at.date?.start || '',
  };
};