import { useState } from "react";
import styled from "styled-components";

import { useInterval } from "lib/hooks/useInterval";

import AnimatedTextListItem from "./AnimatedTextListItem";

export function AnimatedTextList({ texts, className }) {
  if (!texts || (!!texts && texts.length <= 0)) {
    return "React";
  }

  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);

  useInterval(() => {
    let newIndex =
      displayedTextIndex < texts.length - 1 ? displayedTextIndex + 1 : 0;

    setDisplayedTextIndex(newIndex);
  }, 2000);

  const currentDisplayedText = texts[displayedTextIndex];

  return (
    <span className={className}>
      {texts.map((text, index) => {
        const isCurrent = currentDisplayedText === text;
        return (
          <AnimatedTextListItem
            key={`${text}#${index}`}
            isCurrent={isCurrent}
            text={text}
          />
        );
      })}
    </span>
  );
}

export default styled(AnimatedTextList)`
  /*   display: inline-block;
  position: relative;
  text-align: left;
  width: 120px; */
`;
