import Link from "next/link";
import styled from "styled-components";
import classnames from "classnames";
import SiteLogoNavLink from "./SiteLogoNavLink";

function HeaderComponent({ className, isScrolled, ...props }) {
  const headerClassNames = classnames("header", className);

  return (
    <header className={headerClassNames}>
      <div className="header__inner">
        <div className="container">
          <div className="row">
            <div className="col-xs">
              <nav className="nav between-xs">
                <SiteLogoNavLink isHeaderScrolled={isScrolled} />
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default styled(HeaderComponent)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 12;
  transition: all 300ms ease;
  height: var(--header-height);
  background: #fff;

  ${({ isScrolled }) =>
    isScrolled &&
    `
    height: var(--header-height-scrolled);

  `}

  .nav {
    width: 100%;
    display: flex;

    a {
      display: flex;
      color: var(--text-color, black);
      &:not(.site-logo-link) {
        align-items: center;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
    }
  }
`;
