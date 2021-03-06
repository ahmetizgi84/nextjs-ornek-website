import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ahmet İzgi'nin Web Sayfası</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>

      <main>{children}</main>
    </div>
  )
}

export default Layout
