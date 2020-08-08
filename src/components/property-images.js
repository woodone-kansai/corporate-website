import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import SwiperModal from './swiper-modal'
import Layout from './layout'
import SEO from './seo'
import ContactBanner from '../components/contact-banner'

import style from '../styles/property-images.css'

class PropertyDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: null,
      activeCase: null,
    }
  }

  onClickImage = (index, propertyImage) => {
    this.setState({
      activeIndex: index,
      activeCase: propertyImage.property ? propertyImage.property[0].case : null,
    })
  }

  onClickClose = () => {
    this.setState({
      activeIndex: null,
      activeCase: null,
    })
  }

  onSlideChange = (activeIndex) => {
    const { data: { allContentfulPropertyImage } } = this.props
    const propertyImages = allContentfulPropertyImage.edges
    const property = propertyImages[activeIndex].node.property
    this.setState({ activeCase: property ? property[0].case : null })
  }

  render () {
    const { activeIndex, activeCase } = this.state
    const { data: { allContentfulPropertyImage, contentfulPropertyImageCategory } } = this.props

    const propertyImages = allContentfulPropertyImage.edges
      .sort((a, b) => a.node.name.split('-').slice(-1)[0] - b.node.name.split('-').slice(-1)[0])

      const {
      nameEn,
      nameJa,
      body,
    } = contentfulPropertyImageCategory

    return (
      <Layout>
        <SEO title={nameJa} description={body.body} />
        <ContactBanner />

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
            {propertyImages.map(({ node: pImage }, index) => (
              <button
                key={pImage.id}
                className="property-image-item"
                onClick={() => this.onClickImage(index, pImage)}
                onKeyDown={() => this.onClickImage(index, pImage)}
              >
                <div className="property-image-inner">
                  <Img fluid={pImage.squareImage.fluid} />
                </div>
              </button>
            ))}
          </ul>

          {
            activeIndex !== null ? (
              <div className="gallery-modal-container">
                <div className="gallery-modal">
                  <button
                    className="close-button"
                    onClick={this.onClickClose}
                    onKeyDown={this.onClickClose}
                  />

                  <SwiperModal
                    images={propertyImages.map(pi => pi.node.originalImage)}
                    index={activeIndex}
                    onSlideChange={this.onSlideChange}
                  />

                  {
                    activeCase ? (
                      <Link className="property-link" to={`/properties/${activeCase}/`}>
                        この写真の建築事例をもっと見る
                      </Link>
                    ) : null
                  }
                </div>
              </div>
            ) : null
          }
        </div>
        <style jsx>
          {style}
        </style>
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
    allContentfulPropertyImage(filter: {category: {elemMatch: {nameEn: {eq: $nameEn}}}}) {
      edges {
        node {
          id
          name
          originalImage {
            id
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
