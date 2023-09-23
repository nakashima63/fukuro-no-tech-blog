import { StoryObj, Meta } from '@storybook/react';
import { PostContent } from './PostContent';

const meta: Meta<typeof PostContent> = {
  component: PostContent,
};

export default meta;
type Story = StoryObj<typeof meta>;

const dummyContent = `
# Next.jsを使ったReactアプリケーションの構築

## はじめに
この記事では、Next.jsを使用してReactアプリケーションを構築する手順について説明します。Next.jsはReactベースのフレームワークで、シンプルでパフォーマンスの高いウェブアプリケーションを簡単に作成できます。

## セクション1: Next.jsのセットアップ

### Next.jsプロジェクトの作成
まず、新しいNext.jsプロジェクトを作成します。

\`\`\`bash
npx create-next-app my-next-app
\`\`\`

### プロジェクトのディレクトリ構造
プロジェクトを作成すると、次のようなディレクトリ構造が生成されます。

\`\`\`
my-next-app/
  ├── pages/
  │   ├── index.js
  │   └── about.js
  ├── components/
  │   ├── Header.js
  │   └── Footer.js
  ├── styles/
  │   ├── global.css
  │   └── Home.module.css
  └── package.json
\`\`\`

## セクション2: ページの作成とルーティング

### ホームページの作成
\`pages/index.js\` ファイルを編集して、ホームページを作成します。

\`\`\`jsx
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>Enjoy the power of Next.js for your web applications.</p>
    </div>
  );
}

export default HomePage;
\`\`\`

### ルーティングの設定
Next.jsでは、ルーティングが自動的に設定されます。たとえば、\`/\` パスは \`index.js\` コンポーネントにマップされます。


## 結論
この記事では、Next.jsを使用してReactアプリケーションを構築する方法を紹介しました。Next.jsは素晴らしいツールで、開発者に優れた開発体験を提供します。次回のプロジェクトでNext.jsを活用してみてください！
`;

export const Default: Story = {
  args: {
    title: 'Next.jsを使ったReactアプリケーションの構築',
    tags: ['タグ1', 'タグ2', 'タグ3'],
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    content: dummyContent,
  },
};
