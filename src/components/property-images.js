import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "./layout"
import SEO from "./seo"

class PropertyDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeImage: null,
      activeCase: null,
    }
  }

  onClickImage = (propertyImage) => {
    this.setState({
      activeImage: propertyImage.originalImage.file.url,
      activeCase: propertyImage.property ? propertyImage.property[0].case : null,
    })
  }

  onClickClose = () => {
    this.setState({ activeImage: null })
  }

  render () {
    const { activeImage, activeCase } = this.state
    const { data: { allContentfulPropertyImage, contentfulPropertyImageCategory } } = this.props

    const propertyImages = allContentfulPropertyImage.edges
    const {
      nameEn,
      nameJa,
      body,
    } = contentfulPropertyImageCategory

    return (
      <Layout>
        <SEO title={nameJa} description={body.body} />
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
              <li className="property-image-item" key={pImage.id} onClick={() => this.onClickImage(pImage)}>
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
                  <div className="close-button" onClick={this.onClickClose} />

                  <div className="active-image" style={{ backgroundImage: `url(${activeImage})` }} />

                  {
                    activeCase ? (
                      <Link className="property-link" to={`/properties/${activeCase}`}>
                        この写真の建築事例をもっと見る
                      </Link>
                    ) : null
                  }
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
          originalImage {
            file {
              url
            }
          }
          squareImage {
            fluid(maxWidth: 150) {
              ...GatsbyContentfulFluid
            }
          }
          property {
            case
          }
        }
      }
    }
  }
`
