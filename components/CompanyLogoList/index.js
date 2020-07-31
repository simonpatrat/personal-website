import classnames from "classnames";
import styled from "styled-components";

import CompanyLogo from "./CompagnyLogo";

export function CompanyLogoList({ companies, className }) {
  const moduleClassNames = classnames(
    "section",
    "section--companies-logo-list",
    "companies-logo-list-wrapper",
    className
  );

  if (!companies || companies.length === 0) {
    return null;
  }

  return (
    <section className={moduleClassNames}>
      <div className="container">
        <div className="row">
          <div className="col-xs">
            <div className="section__header">
              <h2 className="section__title">J'ai travaillé pour</h2>
            </div>
            <ul className="companies-logo-list row">
              {companies.map((company, index) => {
                const { name, logo, id } = company;
                return (
                  <li
                    key={id}
                    className="companies-logo-list__item col-xs-6 col-sm-4 col-md-3"
                  >
                    <CompanyLogo name={name} logo={logo} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default styled(CompanyLogoList)`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin-bottom: 16px;
    }
  }

  .company-logo {
  }
`;
