import '@/styles/globals.scss';
import '@/styles/components/Posts/PostContent.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
};
