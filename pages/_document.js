import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="description" content="A site for may programming portfolio" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>{`
            body {
              margin: 0;
              font-size: 110%;
              font-family: 'Roboto', sans-serif;
              background-color: #f0f0f0;
            }
          `}</style>
        </body>
      </html>
    )
  }
}
