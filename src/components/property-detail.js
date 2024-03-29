import React from 'react'
import { graphql } from 'gatsby'
import SwiperThumb from './swiper-thumb'
import Layout from './layout'
import SEO from './seo'
import ContactBanner from '../components/contact-banner'

import style from '../styles/property-detail.css'

const PropertyDetail = ({ data }) => {
  const {
    title,
    propertyImages,
    location,
    siteArea,
    totalFloorArea,
    tag
  } = data.contentfulProperty
  const description = `ウッドワン関西で叶えた理想の住まいを集めました。
    外観デザイン、リビング、階段などのカテゴリごとにご紹介しています。
    あなたのお気に入りを見つけてください。
  `

  return (
    <Layout>
      <SEO title={title} description={description} />
      <ContactBanner />
      
      <div className="property-detail">
        <div className="heading-property-container">
          <h2 className="heading-property">{title}</h2>
          <hr />
          <h2 className="heading-property">{`CASE${data.contentfulProperty.case}`}</h2>
        </div>

        <SwiperThumb
          topImages={propertyImages.map(p => p.originalImage)}
          thumbImages={propertyImages.map(p => p.squareImage || p.originalImage)}
        />

        <div className="description">
          <p className="property-body">
            {description}
          </p>

          <ul className="property-tags">
            {
              tag.map(t => (
                <li key={t} className="property-tag">{t}</li>
              ))
            }
          </ul>

          <ul className="property-spec">
            <li>施工場所：{location}</li>
            {siteArea && <li>敷地面積：{siteArea}m&sup2;</li>}
            {totalFloorArea && <li>延床面積：{totalFloorArea}m&sup2;</li>}
          </ul>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </Layout>
  )
}

export default PropertyDetail
export const pageQuery = graphql`
  query($id: String!) {
    contentfulProperty(id: { eq: $id }) {
      case
      title
      propertyImages {
        name
        originalImage {
          id
          file {
            url
          }
        }
        squareImage {
          id
          file {
            url
          }
        }
      }
      location
      siteArea
      totalFloorArea
      tag
    }
  }
`
