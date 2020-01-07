import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "./layout"
import SEO from "./seo"

const PropertyDetail = ({ data }) => {
  const {
    nameEn,
    nameJa,
    body,
  } = data.contentfulPropertyImageCategory
  const propertyImages = data.allContentfulPropertyImage.edges

  return (
    <Layout>
      <SEO title={nameJa} />
      <div className="property-images">
        <div className="heading-property-image-container">
          <h2 className="heading-property-image en">{nameEn.toUpperCase()}</h2>
          <hr />
          <h2 className="heading-property-image ja">{nameJa}</h2>
        </div>

        <div className="description">
          {body.body}
        </div>

        <ul className="property-image-container">
          {propertyImages.map(({ node: pImage }) => (
            <li className="property-image-item" key={pImage.id}>
              <div className="property-image-inner">
                <Img fluid={pImage.squareImage.fluid} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default PropertyDetail
export const pageQuery = graphql`
  query($nameEn: String!) {
    contentfulPropertyImageCategory(nameEn: { eq: $nameEn }) {
      nameEn
      nameJa
      body {
        body
      }
    }
    allContentfulPropertyImage(filter: {category: {elemMatch: {nameEn: {eq: $nameEn}}}}) {
      edges {
        node {
          id
          name
          originalImage {
            id
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
          }
          squareImage {
            id
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
