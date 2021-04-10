import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBanner from '../components/contact-banner'
import Heading from '../components/heading'

import style from '../styles/gallery.css'

const IndexPage = ({ data }) => {
  const categories = data.allContentfulPropertyImageCategory.edges
  const description = `ウッドワン関西で叶えた理想の住まいを集めました。
    外観デザイン、リビング、階段などのカテゴリごとにご紹介しています。
    あなたのお気に入りを見つけてください。
  `

  return (
    <Layout>
      <SEO title="ギャラリー" description={description} />
      <ContactBanner />

      <div className="gallery">
        <Heading
          enText="GALLERY"
          jaText="ギャラリー"
        />

        <p className="description">
          {description}
        </p>

        <ul className="category-list">
          {categories.map(({ node: category }) => (
            <li className="category-list-item" key={category.id}>
              <Link to={`/property-images/${category.nameEn}/`} className="category-inner">
                <Img fluid={category.image.fluid} alt={category.nameJa} />
                <div className="category-text">
                  <h3 className="category-title en">{category.nameEn.toUpperCase()}</h3>
                  <h3 className="category-title ja">{category.nameJa}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {style}
      </style>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query GalleryPageQuery {
    allContentfulPropertyImageCategory(sort: {fields: createdAt}) {
      edges {
        node {
          id
          nameEn
          nameJa
          image {
            fluid(maxWidth: 455) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
