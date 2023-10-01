import { Tag } from "../Tags/Tag";

type Props = {
  title: string;
  tag: string;
  children: React.ReactNode;
};

export const Section = ({ title, tag = '', children }: Props) => {
  return (
    <>
      <div className='flex py-4 text-white text-2xl'>
        <p>{title}</p>
        {tag !== '' && 
          <p>{tag}</p>
        }
      </div>
      <div>
        {children}
      </div>
    </>
  );
};