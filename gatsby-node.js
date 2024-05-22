const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  // const { createPage } = actions;
  const pageTemplate = path.resolve("src/templates/page.js");

  const { data } = await graphql(
    `
      query MyQuery {
        allWpPage {
          nodes {
            title
            uri
            elementorData
          }
        }
      }
    `
  );
  data.allWpPage.nodes.forEach((edge) => {
    actions.createPage({
      path: `${edge.uri}`,
      component: pageTemplate,
      context: edge,
    });
  });
};
