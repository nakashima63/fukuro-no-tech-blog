import { TagList } from "../Tags/TagList";

type Props = {
  title: string;
  tags?: string[];
  children: React.ReactNode;
};

export const Section = ({ title, tags = [], children }: Props) => {
  return (
    <>
      <div className='flex'>
        <div className='text-white text-2xl py-4'>
          {title}
        </div>
        {tags.length > 0 && (
         <TagList tags={tags} /> 
        )}
      </div>
      <div>
        {children}
      </div>
    </>
  );
};