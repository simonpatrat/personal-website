import Layout from "components/Layout";
import ProjectList from "components/ProjectList";
import Hero from "components/Hero";
import CompanyLogoList from "components/CompanyLogoList";

import { getPosts } from "lib/utils/posts";
import { getProjects } from "lib/utils/projects";
import { getCompaniesLogos } from "lib/utils/companies";

const Index = ({
  title,
  subtitle,
  description,
  posts,
  projects,
  companiesLogos,
  ...props
}) => {
  return (
    <Layout pageTitle={title} pageSubtitle={subtitle}>
      {/*       <Hero title="React, Node, and all the things" /> */}
      <Hero title="Je développe des applications web avec React" />
      <main>
        <CompanyLogoList companies={companiesLogos} />
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

  const companiesLogos = getCompaniesLogos();

  return {
    props: {
      posts,
      projects,
      companiesLogos,
      title: configData.default.title,
      subtitle: configData.default.subtitle,
      description: configData.default.description,
    },
  };
}
