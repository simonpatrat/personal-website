import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "components/Layout";
import { stringifyDates } from "lib/utils/stringifyDates";
import styled from "styled-components";

export function PortfolioProject({
  siteTitle,
  frontmatter,
  markdownBody,
  className,
}) {
  if (!frontmatter) return <></>;

  const { title, subTitle, featuredImage } = frontmatter;

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
                  <h1 className="big-title">{frontmatter.title}</h1>
                  <p className="project-article__description">{subTitle}</p>
                </div>
              </div>
              <div>
                <ReactMarkdown source={markdownBody} />
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
