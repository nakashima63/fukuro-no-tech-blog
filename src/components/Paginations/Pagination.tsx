type Props = {
  startText: string;
  endText?: string;
};

export const Pagination = ({ startText, endText = '' }: Props) => {
  return (
    <div className='flex justify-between py-4'>
      <div className='text-white text-lg hover:underline'>
        {startText}
      </div>
      <div className='text-white text-lg hover:underline'>
        {endText}
      </div>
    </div>
  );
};