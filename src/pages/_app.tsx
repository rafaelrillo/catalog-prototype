import Loader from '@/components/Loader/Loader';
import Layout from '../components/Layout';
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