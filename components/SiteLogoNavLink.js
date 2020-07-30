import Link from "next/link";
import styled from "styled-components";
import classnames from "classnames";

export function SiteLogoNavLink({ className, ...props }) {
  const logoLinkClassNames = classnames("site-logo-link", className);
  return (
    <Link href="/">
      <a className={logoLinkClassNames}>Simon Patrat</a>
    </Link>
  );
}

export default styled(SiteLogoNavLink)`
  font-family: var(--font-sans);
  color: var(--color-text, black);
  font-size: 27px;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
`;
