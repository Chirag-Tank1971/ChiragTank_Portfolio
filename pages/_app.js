import 'lenis/dist/lenis.css';
import '../styles/globals.css';
import Head from 'next/head';
import SmoothScroll from '../components/SmoothScroll';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chirag Tank | Full Stack Developer</title>
        <meta name="description" content="Chirag Tank - Full-stack developer (MERN, ASP.NET Core, Python) with hands-on OCR and vision-language model experience for multilingual document digitisation, and LLM API integration." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/Fevicon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </>
  );
}
