import Link from "next/link";
import classnames from "classnames";
import styled from "styled-components";

export function Card({
  className,
  linkHref,
  projectname,
  imageSrc,
  title,
  subTitle,
  type,
  ...props
}) {
  const cardClassNames = classnames("card", className, {
    [`card--${type}`]: type,
  });
  return (
    <div className={cardClassNames}>
      <div className="card__content">
        {linkHref ? (
          <Link href={linkHref} as={`/project/${projectname}`}>
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        ) : (
          <h3>{title}</h3>
        )}
        {!!subTitle && <p>{subTitle}</p>}
      </div>
      <div className="card__image-container">
        {imageSrc && (
          <img className="image card__image" src={imageSrc} alt={title} />
        )}
      </div>
    </div>
  );
}

export default styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  transition: all 300ms ease;
  position: relative;

  a {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  .card__content {
    padding: 16px;
  }

  .card__image-container {
    background: #fff;
    order: -1;
  }

  &:hover {
    box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.4);
  }
`;
