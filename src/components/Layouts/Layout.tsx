import { Header } from "./Headers/Header";
import { Footer } from "./Footers/Footer";
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: '500',
  subsets: ['latin'],
});

export const Layout = ({ children }: any) => {
  return (
    <div className={`${notoSansJP.className} flex flex-col min-h-screen`}>
      <Header />
      <main className='w-full bg-black flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  );
};