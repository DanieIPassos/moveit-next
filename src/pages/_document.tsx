import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,regular,500,600,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}