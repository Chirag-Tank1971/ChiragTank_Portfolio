import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chirag Tank | Portfolio</title>
        <meta name="description" content="Portfolio Template for Developer" />
        <link rel="icon" type="image/x-icon" href="/assets/Fevicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

