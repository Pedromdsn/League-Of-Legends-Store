import Head from "next/head"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>LOL Store</title>
        <link rel="icon" type="image/icon" sizes="16x16" href="/favicon.ico" />
        <meta name="description" content="League of Legends Accounts Store" />
        <meta name="author" content="Pedromdsn" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
