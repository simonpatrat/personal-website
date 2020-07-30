import Layout from "components/Layout";
import PostList from "components/PostList";
import ProjectList from "components/ProjectList";

import { getPosts } from "lib/utils/posts";
import { getProjects } from "lib/utils/projects";

const Index = ({ title, description, posts, projects, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="description">{description}</p>
      <main>
        <PostList posts={posts} />
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
      description: configData.default.description,
    },
  };
}
