import { Loader, Layout } from '@/components';
import '../styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Loader />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;