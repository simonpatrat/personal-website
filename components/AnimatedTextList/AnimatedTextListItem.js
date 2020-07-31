import styled from "styled-components";

export function AnimatedTextListItem({ isCurrent, text, className }) {
  return <b className={className}>{text}</b>;
}

export default styled(AnimatedTextListItem)`
  animation: textAppear 700ms ease;
  display: none;
  /*   position: absolute;
  top: 0;
  left: 0; */

  ${({ isCurrent }) =>
    isCurrent &&
    `
    display: inline;
  `}

  @keyframes textAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
