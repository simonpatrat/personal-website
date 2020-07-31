import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { HEADER_BASE_HEIGHT_PX } from "lib/constants";

export default function Layout({
  children,
  pageTitle,
  pageSubTitle,
  ...props
}) {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  const headerIsScrolled = scrollY > HEADER_BASE_HEIGHT_PX;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <Header isScrolled={headerIsScrolled} />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
