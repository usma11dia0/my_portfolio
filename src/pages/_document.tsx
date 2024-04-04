import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
