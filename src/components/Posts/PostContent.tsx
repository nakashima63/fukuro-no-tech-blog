import { Container } from "../Containers/Container";
import { TagList } from "../Tags/TagList";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import '../../styles/components/Posts/PostContent.scss';

type Props = {
  title: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  content: string;
};

export const PostContent = ({ title, tags, createdAt, updatedAt, content }: Props) => {
  return (
    <Container>
      <section className='bg-zinc-800 pb-2'>
        <h2 className='text-white text-2xl pt-4 px-6'>{title}</h2>
        <div className='flex text-white text-sm pt-4 px-6'>
          <span className='pr-4'>作成日：{createdAt}</span>
          {updatedAt && (
            <span>更新日：{updatedAt}</span>
          )}
        </div>
        <TagList tags={tags} />
        <hr className="border-t border-white my-4" />
        <div className='px-6 text-white'>
          <ReactMarkdown 
            components={{
              code({node, inline, className, children}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </section>
    </Container>
   );
};