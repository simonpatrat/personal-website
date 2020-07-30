import Link from "next/link";
import styled from "styled-components";
import classnames from "classnames";
import SiteLogoNavLink from "./SiteLogoNavLink";

function HeaderComponent({ className, ...props }) {
  const headerClassNames = classnames("header", className);
  return (
    <header className={headerClassNames}>
      <div className="container">
        <div className="row">
          <div className="col-xs">
            <nav className="nav between-xs">
              <SiteLogoNavLink />

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
    </header>
  );
}

export default styled(HeaderComponent)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 12;
  transition: all 300ms ease;
  transition-delay: 300ms;

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
