import styled from "styled-components";

export function Footer({ className, ...props }) {
  return (
    <footer className={className}>
      <div className="footer__inner">
        <div className="container">
          <div className="row center-xs middle-xs">
            <div className="col-xs">
              <ul className="social-links-list">
                <li className="social-links-list__item">
                  <a
                    href="https://github.com/simonpatrat"
                    target="_blank"
                    title="Compte Github de Simon Patrat"
                  >
                    <span aria-hidden className="lab la-github" />
                  </a>
                </li>
                <li className="social-links-list__item">
                  <a
                    href="https://www.linkedin.com/in/simon-patrat-07260a110/"
                    target="_blank"
                    title="Profil Linkedin de Simon Patrat"
                  >
                    <span aria-hidden className="lab la-linkedin-in" />
                  </a>
                </li>
                <li className="social-links-list__item">
                  <a
                    href="https://codepen.io/simonpatrat"
                    target="_blank"
                    title="Compte Codepen de Simon Patrat"
                  >
                    <span aria-hidden className="lab la-codepen" />
                  </a>
                </li>
              </ul>
              <div>Fait avec {"\u{1F69C}"} @ Montréal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  --footer-height: 300px;

  min-height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;

  .footer__inner {
    width: 100%;
    min-height: var(--footer-height);
    max-width: 1280px;
  }

  .social-links-list {
    list-style: none;
    padding: 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: block;
      height: 40px;
      width: 40px;
    }
    .lab {
      font-size: 26px;
    }
  }
`;
