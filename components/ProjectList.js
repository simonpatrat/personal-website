import Link from "next/link";

export default function PostList({ projects }) {
  if (projects === "undefined" || projects.length <= 0) return null;

  return (
    <div>
      {!projects && <div>No projects!</div>}
      <ul>
        {projects &&
          projects.map((project) => {
            return (
              <li key={project.slug}>
                <Link href={{ pathname: `/project/${project.slug}` }}>
                  <a>{project.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
