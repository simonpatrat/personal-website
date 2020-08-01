import { useEffect, useState } from "react";
import Head from "next/head";
import classnames from "classnames";

import Header from "./Header";
import Footer from "./Footer";

import { HEADER_BASE_HEIGHT_PX } from "lib/constants";
import styled from "styled-components";

export function Layout({
  children,
  className,
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
  const layoutClassNames = classnames("layout", className);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className={layoutClassNames}>
        <Header isScrolled={headerIsScrolled} />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default styled(Layout)`
  min-height: calc(
    100vh - var(--footer-height, 300px) - var(--header-height, 120px)
  );
`;
