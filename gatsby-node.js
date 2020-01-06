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
      const propertyDetailTemplate = path.resolve("./src/components/property-detail.js")
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
