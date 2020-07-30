import Layout from "components/Layout";
// import PostList from "components/PostList";
import ProjectList from "components/ProjectList";
import Hero from "components/Hero";

import { getPosts } from "lib/utils/posts";
import { getProjects } from "lib/utils/projects";

const Index = ({ title, subtitle, description, posts, projects, ...props }) => {
  return (
    <Layout pageTitle={title} pageSubtitle={subtitle}>
      <Hero title="React, Node, and all the things" />
      <main>
        {/*         <PostList posts={posts} /> */}
        <ProjectList projects={projects} />
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = getPosts();

  const projects = getProjects();

  return {
    props: {
      posts,
      projects,
      title: configData.default.title,
      subtitle: configData.default.subtitle,
      description: configData.default.description,
    },
  };
}
