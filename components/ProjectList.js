import Card from "components/Card";
import styled from "styled-components";
import classnames from "classnames";

export function ProjectList({ projects, className, ...props }) {
  if (projects === "undefined" || projects.length <= 0) return null;
  const sectionClassNames = classnames("section section--projects", className);
  return (
    <section className={sectionClassNames}>
      <div className="container">
        <div className="row">
          <div className="col-xs">
            {!projects && <div>No projects!</div>}
            <div className="section__header">
              <h2 className="section__title">Projets</h2>
            </div>
            <ul className="row">
              {projects &&
                projects.map((project) => {
                  const { frontmatter, slug } = project;

                  const { title, subTitle, featuredImage } = frontmatter;

                  return (
                    <li className="col-xs-12 col-sm-6" key={slug}>
                      <Card
                        linkHref={`/project/[projectname]`}
                        projectname={project.slug}
                        imageSrc={featuredImage}
                        title={title}
                        subTitle={subTitle}
                        type="project"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default styled(ProjectList)`
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 16px;
    }
  }
`;
