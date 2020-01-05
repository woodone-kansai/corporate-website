const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulProperty {
          edges {
            node {
              id
              case
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the paths to our template
      const propertyDetailTemplate = path.resolve("./src/templates/property-detail.js")
      // Then for each result we create a page.
      result.data.allContentfulProperty.edges.forEach(edge => {
        createPage({
          path: `/properties/${edge.node.case}/`,
          component: slash(propertyDetailTemplate),
          context: {
            case: edge.node.case,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
