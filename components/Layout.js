import Footer from "./Footer";
import Head from "./Header"
import Header from "./Header"

export default function Layout({ children, name }) {
    return (
        <div>
            <Head>
        <title>{name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header name={name} />
      <main>{children}</main>
      <Footer />
        </div>
    )
}