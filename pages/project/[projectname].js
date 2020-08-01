import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

import Layout from "components/Layout";
import { stringifyDates } from "lib/utils/stringifyDates";
import styled from "styled-components";

const ImageRenderer = ({ alt, src, title, className }) => {
  const wrapperClassNames = classnames(
    "image-wrapper",
    `image-wrapper--${title.replace(/\s/g, "-").toLowerCase()}`
  );
  return (
    <span className={wrapperClassNames}>
      <img src={src} alt={alt} className={className} />
    </span>
  );
};

export function PortfolioProject({
  siteTitle,
  frontmatter,
  markdownBody,
  className,
}) {
  if (!frontmatter) return <></>;

  const {
    title,
    subTitle,
    featuredImage,
    projectDemoLink,
    projectCodeLink,
  } = frontmatter;

  return (
    <Layout pageTitle={`${siteTitle} | ${title}`} className={className}>
      <div className="container">
        <div className="row">
          <div className="col-xs">
            {/*             <Link href="/">
              <a className="button">Back to projects list</a>
            </Link> */}
            <article className="project-article">
              <div className="row middle-md start-md">
                <div className="col-xs-12 col-md-4">
                  <div className="project-article__image">
                    <img src={featuredImage} alt={title} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="project-article__header">
                    <h1 className="big-title">{frontmatter.title}</h1>
                    <p className="project-article__description">{subTitle}</p>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        {frontmatter.keyFeatures && (
                          <div className="key-features">
                            <p className="key-features__title">
                              Principales fonctionalités:
                            </p>
                            <ul className="key-features__list">
                              {frontmatter.keyFeatures.map((feature, index) => (
                                <li key={`${feature}#${index}`}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="project-links-wrapper">
                          {projectDemoLink && (
                            <a
                              href={projectDemoLink}
                              className="button project-link project-link--demo-link"
                              target="_blank"
                            >
                              Voir le site &nbsp;
                              <span
                                className="las la-external-link-alt"
                                aria-hidden
                              />
                            </a>
                          )}

                          {projectCodeLink && (
                            <a
                              href={projectCodeLink}
                              className="button project-link project-link--code-link"
                              target="_blank"
                            >
                              Voir le code
                              {projectCodeLink.includes("github") && (
                                <>
                                  &nbsp;
                                  <span className="lab la-github" aria-hidden />
                                </>
                              )}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <div className="project-article__body">
                    <ReactMarkdown
                      source={markdownBody}
                      renderers={{
                        image: ImageRenderer,
                      }}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default styled(PortfolioProject)`
  .project-article__image {
    margin: 32px 32px 32px 0;
    border-radius: 10px;
    border: 16px solid #eee;
    background: #fff;
  }

  .project-article__description {
    font-size: 2rem;
  }

  .project-article__header {
    .key-features {
      font-family: var(--font-sans);

      &__title,
      &__list {
        display: block;
        font-family: var(--font-sans);
      }

      &__title {
        font-weight: bold;
        margin-bottom: 0;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 2px;
      }

      &__list {
        margin-top: 0;
        font-size: 0.9rem;
        padding: 8px 0 0 20px;
      }
    }

    .project-links-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .button {
        margin: 16px;
      }
    }
  }

  .project-article__body {
    a {
      text-decoration: underline;
      font-weight: bold;
      transition: all 300ms ease;

      &:hover {
        opacity: 0.8;
      }

      &:focus {
        color: var(--color-secondary);
        opacity: 1;
      }
    }

    .image-wrapper {
      display: block;
      margin: 64px auto;
      box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
      position: relative;

      &:after {
        content: "";
        display: block;
        height: 20px;
        width: 100%;
        position: absolute;
        top: -20px;
        left: 0;
        border-radius: 5px 5px 0 0;
        background: #ddd;
      }

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: -20px;
        left: 0;
        z-index: 2;
        background: radial-gradient(
            10px 10px at 10% 35%,
            red 50%,
            transparent 50%
          ),
          radial-gradient(10px 10px at 22% 35%, gold 50%, transparent 50%),
          radial-gradient(10px 10px at 34% 35%, green 50%, transparent 50%);
        background-repeat: no-repeat;
        width: 120px;
        height: 30px;
      }

      img {
        width: 100%;
        display: block;
      }
    }
  }
`;

export async function getStaticProps({ ...ctx }) {
  const { projectname } = ctx.params;

  const content = await import(`../../content/projects/${projectname}.md`);
  const config = await import(`../../siteconfig.json`);

  const result = matter(content.default);
  const resultDataWithDatesStringified = JSON.stringify(
    result.data,
    stringifyDates
  );
  const document = {
    ...result,
    data: JSON.parse(resultDataWithDatesStringified),
  };

  return {
    props: {
      siteTitle: config.title,
      frontmatter: document.data,
      markdownBody: document.content,
    },
  };
}

export async function getStaticPaths() {
  const projectsSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../content/projects", true, /\.md$/));

  const paths = projectsSlugs.map((slug) => `/project/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
