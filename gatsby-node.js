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
        allContentfulPropertyImageCategory {
          edges {
            node {
              id
              nameEn
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful property data", result.errors)
      }
      const propertyDetailComponent = path.resolve("./src/components/property-detail.js")
      result.data.allContentfulProperty.edges.forEach(edge => {
        createPage({
          path: `/properties/${edge.node.id}/`,
          component: slash(propertyDetailComponent),
          context: {
            id: edge.node.id,
          },
        })
      })

      const propertyImageComponent = path.resolve("./src/components/property-images.js")
      result.data.allContentfulPropertyImageCategory.edges.forEach(edge => {
        createPage({
          path: `/property-images/${edge.node.nameEn}/`,
          component: slash(propertyImageComponent),
          context: {
            nameEn: edge.node.nameEn,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful property data", error)
    })
}
