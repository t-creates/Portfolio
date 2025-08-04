import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      {/* Fonts */}
      <link
        rel="stylesheet"
        as="style"
        href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Lato&display=swap"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="stylesheet"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@600&display=swap"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="stylesheet"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&family=Reem+Kufi&display=swap"
        rel="stylesheet"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="stylesheet"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <link
        rel="stylesheet"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Lato&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"
        />
      </noscript>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
