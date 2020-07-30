import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "components/Layout";
import { stringifyDates } from "lib/utils/stringifyDates";

export default function PortfolioProject({
  siteTitle,
  frontmatter,
  markdownBody,
}) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

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
