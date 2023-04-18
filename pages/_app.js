import Head from 'next/head'
import '@/styles/globals.scss'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
      <title>Earn crypto with A-ADS</title>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)

export default App
