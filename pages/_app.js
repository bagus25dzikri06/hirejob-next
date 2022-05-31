import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import Head from 'next/head'
import Layout1 from '../layouts/layout1'
import Layout2 from '../layouts/layout2'
import Layout3 from '../layouts/layout3'

const layouts = {
  L1: Layout1,
  L2: Layout2,
  L3: Layout3
}

const NoLayout = ({ children }) => {
  return <>
    { children }
  </>
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || NoLayout
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>HireJob</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
