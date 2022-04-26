import Head from "next/head"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>LOL Store</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
