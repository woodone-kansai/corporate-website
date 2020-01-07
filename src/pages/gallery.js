import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const categories = data.allContentfulPropertyImageCategory.edges
  const keywords = categories.map(c => c.node.nameJa)

  return (
    <Layout>
      <SEO title="ギャラリー" keywords={keywords} />
      <div className="gallery">
        <div className="heading-gallery-container">
          <h2 className="heading-gallery en">GALLERY</h2>
          <hr />
          <h2 className="heading-gallery ja">ギャラリー</h2>
        </div>

        <p className="description">
          ウッドワン関西で叶えた理想の住まいを集めました。
          <br />
          外観デザイン、リビング、階段などのカテゴリごとにご紹介しています。
          <br />
          あなたのお気に入りを見つけてください。
        </p>

        <ul className="category-list">
          {categories.map(({ node: category }) => (
            <li className="category-list-item" key={category.id}>
              <Link to={`/property-images/${category.nameEn}`} className="category-inner">
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
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
