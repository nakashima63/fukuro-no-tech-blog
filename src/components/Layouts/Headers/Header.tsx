import Link from 'next/link';
import Image from 'next/image';
import HeaderImage from '../../../../public/images/fukuro.svg';

export const Header = () => {
  return (
    <header className='w-full h-32 bg-purple-800 flex items-center'>
      <Link href='/' className='ml-4'>
        <Image src={HeaderImage} alt='fukuro' />
      </Link>
      <Link href='/' className='text-4xl text-white ml-4'>
        袋の技術ブログ
      </Link>
      <Link href='/' className='text-lg text-rose-500 hover:underline ml-4'>
        Home
      </Link>
      <Link href='/profile' className='text-lg text-rose-500 hover:underline ml-4'>
        Profile
      </Link>
      <div className='text-lg text-rose-500 ml-auto'>
        <a href='https://fukuro-no-tech-blog-storybook.vercel.app/' className='hover:underline mr-4'>
          Storybook
        </a>
      </div>
    </header>
  );
};