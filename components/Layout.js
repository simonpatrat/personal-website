import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
