import Link from "next/link";
import classnames from "classnames";
import styled from "styled-components";

export function Card({
  className,
  linkPathname,
  imageSrc,
  title,
  type,
  ...props
}) {
  const cardClassNames = classnames("card", className, {
    [`card--${type}`]: type,
  });
  return (
    <div className={cardClassNames}>
      <div className="card__content">
        {linkPathname ? (
          <Link href={{ pathname: linkPathname }}>
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        ) : (
          <h3>{title}</h3>
        )}
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

  .card__content {
    padding: 16px;
  }

  .card__image-container {
    background: #ccc;
    order: -1;
  }
`;
