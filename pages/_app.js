import '../styles/globals.css'
import '../public/css/project2.css'
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
