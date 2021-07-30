import Head from 'next/head'
import Header from '../components/header/header'
import GlobalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cabin:wght@400;500&family=Exo+2:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp