import styled from "styled-components";

export function Footer({ className, ...props }) {
  return (
    <footer className={className}>
      <div className="container">
        <div className="row center-xs middle-xs">
          <div className="col-xs">Built by me!</div>
        </div>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
