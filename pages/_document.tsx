import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' sm:overflow-y-scroll sm:scrollbar-thin sm:scrollbar-thumb-red sm:scrollbar-track-[#ffffffec]' >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
