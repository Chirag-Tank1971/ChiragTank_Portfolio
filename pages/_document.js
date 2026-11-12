import { Html, Head, Main, NextScript } from 'next/document';

// Sets the saved/preferred theme before first paint to avoid a flash.
const themeScript = `
  try {
    var theme = localStorage.getItem('portfolio-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
