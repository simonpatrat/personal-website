export const getCompaniesLogos = () =>
  ((context) => {
    const keys = context.keys();

    const data = keys.map((key, index) => {
      const fileNameWithoutFileExtension = key
        .replace(/^.*[\\\/]/, "")
        .slice(0, -4);

      let id = fileNameWithoutFileExtension.replace(/^.*[\\\/]/, "");

      const name = fileNameWithoutFileExtension
        .replace(/^.*[\\\/]/, "")
        .replace(/^.*[0-9]/, "")
        .replace(/-/g, " ")
        .replace(/_/g, "")
        .replace(/\.$/, " ");

      const logo = `img/companies-logos${key.replace(/^\./, "")}`;

      return {
        id,
        name,
        logo,
      };
    });
    return data;
  })(
    require.context("../../public/img/companies-logos", true, /\.png$|\.svg$/)
  );
