import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja-JP'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
