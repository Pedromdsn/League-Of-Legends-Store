import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>LOL Store</title>
				<link rel="icon" type="image/icon" sizes="16x16" href="/favicon.ico" />
				<meta name="description" content="League of Legends Accounts Store" />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
