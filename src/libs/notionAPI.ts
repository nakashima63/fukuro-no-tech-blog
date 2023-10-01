import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

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

export const getPostBySlug = async (slug: string): Promise<any> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    metadata,
    markdown: mdString
  }
};

/**
 * 全てのタグを取得する
 */
export const getAllTags = async () => {
  const allPosts = await getAllPosts();

  const allTagsDuplicationList = allPosts.flatMap((post) => post.tags);
  const set = new Set(allTagsDuplicationList);
  const allTagsList = Array.from(set);
  
  return allTagsList;
};

/**
 * タグから記事を取得する
 */
export const getPostsByTag = async (tag: string) => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.tags.includes(tag));

  return posts;
};
