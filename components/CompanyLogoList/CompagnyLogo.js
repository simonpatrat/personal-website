import styled from "styled-components";
import classnames from "classnames";

export function CompagnyLogo({ logo, name, className, ...props }) {
  const compagnyLogoClassNames = classnames("compagny-logo", className);
  return (
    <div className={compagnyLogoClassNames}>
      <img src={logo} alt={name} />
    </div>
  );
}

export default styled(CompagnyLogo)`
  padding: 16px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    max-height: 100px;
    filter: grayscale(1);
  }
`;
