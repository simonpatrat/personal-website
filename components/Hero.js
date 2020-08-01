import classnames from "classnames";
import styled from "styled-components";

import AnimatedTextList from "components/AnimatedTextList";

const technologies = [
  "React",
  "Redux",
  "Node.js",
  "Typescript",
  "Next.js",
  "sass",
  "css-in-js",
  "Webpack",
  "Express.js",
];

import MaGanache from "../public/img/maganache-4.svg";

export function Hero({ className, title, description, ...props }) {
  const heroClassNames = classnames("hero", className);

  return (
    <div className={heroClassNames}>
      <div className="hero__inner container">
        <div className="hero__text">
          <h1 className="title">
            {title}
            <AnimatedTextList texts={technologies} />
          </h1>
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
    background: url("./img/triangle.svg") no-repeat bottom right;

    @media (max-width: 680px) {
      flex-direction: column;
    }
  }

  .hero__text {
    .title {
      font-size: var(--font-size-hero-text, 82px);
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

    @media (max-width: 680px) {
      width: 100%;
      height: 60%;
    }

    svg {
      fill: black;
      stroke: none;
      height: 100%;
      max-width: 100%;
    }
  }
`;
