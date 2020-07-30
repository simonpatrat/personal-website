import classnames from "classnames";
import styled from "styled-components";

import HomeCaskSvg from "../public/img/home-cask.svg";
import MaGanache from "../public/img/maganache-4.svg";

export function Hero({ className, title, description, ...props }) {
  const heroClassNames = classnames("hero", className);

  return (
    <div className={heroClassNames}>
      <div className="hero__inner container">
        <div className="hero__text">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="hero__image" aria-hidden>
          {/*      <HomeCaskSvg /> */}
          <MaGanache></MaGanache>
        </div>
      </div>
    </div>
  );
}

export default styled(Hero)`
  height: calc(60vh - var(--header-height) - 92px * 1.73);
  position: relative;

  .hero__inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .hero__image {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    svg {
      fill: black;
      stroke: none;
      height: 100%;
      max-width: 100%;
    }
  }
`;
