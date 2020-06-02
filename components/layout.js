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
      <Navigation />
      <main>{children}</main>
      <footer>designed by Ahmet</footer>
    </div>
  )
}

export default Layout
