import classnames from "classnames";
import styled from "styled-components";

import MaGanache from "../public/img/maganache-4.svg";

export function Hero({ className, title, description, ...props }) {
  const heroClassNames = classnames("hero", className);

  return (
    <div className={heroClassNames}>
      <div className="hero__inner container">
        <div className="hero__text">
          <h1 className="title">{title}</h1>
        </div>
        <div className="hero__image" aria-hidden>
          <MaGanache />
        </div>
      </div>
    </div>
  );
}

export default styled(Hero)`
  height: calc(60vh - var(--header-height) - 92px * 1.73);
  min-height: 450px;
  position: relative;

  .hero__inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    background: url("img/triangle.svg") no-repeat bottom right;
  }

  .hero__text {
    .title {
      font-size: 82px;
      font-family: var(--font-serif);
      font-weight: normal;
      font-style: normal;
    }
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
