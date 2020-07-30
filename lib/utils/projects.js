import matter from "gray-matter";
import { stringifyDates } from "lib/utils/stringifyDates";

export const getProjects = () =>
  ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];

      const result = matter(value.default);
      const resultDataWithDatesStringified = JSON.stringify(
        result.data,
        stringifyDates
      );
      const document = {
        ...result,
        data: JSON.parse(resultDataWithDatesStringified),
      };

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../content/projects", true, /\.md$/));
