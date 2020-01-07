import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "./layout"
import SEO from "./seo"

class PropertyDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeImage: null
    }
  }

  onClickImage = (image) => {
    this.setState({ activeImage: image })
  }

  onClickClose = (image) => {
    this.setState({ activeImage: null })
  }

  render () {
    const { activeImage } = this.state
    const { data: { allContentfulPropertyImage, contentfulPropertyImageCategory } } = this.props

    const propertyImages = allContentfulPropertyImage.edges
    const {
      nameEn,
      nameJa,
      body,
    } = contentfulPropertyImageCategory

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
              <li className="property-image-item" key={pImage.id} onClick={() => this.onClickImage(pImage.originalImage.file.url)}>
                <div className="property-image-inner">
                  <Img fluid={pImage.squareImage.fluid} />
                </div>
              </li>
            ))}
          </ul>

          {
            activeImage ? (
              <div className="gallery-modal-container">
                <div className="gallery-modal">
                  <div className="closeButton" onClick={this.onClickClose} />
                  <div className="activeImage" style={{ backgroundImage: `url(${activeImage})` }} />
                </div>
              </div>
            ) : null
          }
        </div>
      </Layout>
    )
  }
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
    allContentfulPropertyImage(sort: {fields: name}, filter: {category: {elemMatch: {nameEn: {eq: $nameEn}}}}) {
      edges {
        node {
          id
          name
          originalImage {
            file {
              url
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
