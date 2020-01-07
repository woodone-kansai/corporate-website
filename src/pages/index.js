import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Swiper from '../components/swiper';

import Layout from "../components/layout"
import SEO from "../components/seo"

import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide3 from '../images/slide-3.jpg'
import slide4 from '../images/slide-4.jpg'

const IndexPage = ({ data }) => {
  const properties = data.allContentfulProperty.edges

  return (
    <Layout>
      <SEO title="トップページ" keywords={[]} />
      <div className="home">
        <div className="top-image-slider">
          <Swiper options={{
            autoplay: {
              delay: 5000,
            },
            speed: 1000,
            loop: true,
          }}>
            <img className="swiper-slide" src={slide1} alt="slide1" />
            <img className="swiper-slide" src={slide2} alt="slide2" />
            <img className="swiper-slide" src={slide3} alt="slide3" />
            <img className="swiper-slide" src={slide4} alt="slide4" />
          </Swiper>

          <div className="top-image-inner">
            <div className="top-text">
              <div className="top-text-left">
                <span>理想の住まいを叶える。</span>
              </div>
              <br />
              <div className="top-text-right">
                <span>ウッドワン関西。</span>
              </div>
            </div>
          </div>
        </div>

        <p className="description">
          ウッドワン関西は、阪神間でオーナー様のご自宅を施工してまいりました。
          <br />
          これからも皆さまの生活に寄り添った快適な間取り、性能、デザインを追求してまいります。
        </p>

        <div className="heading-works-container">
          <h2 className="heading-works en">WORKS</h2>
          <h2 className="heading-works ja">- 施工事例 -</h2>
        </div>

        <ul className="property-list">
          {properties.map(({ node: property }) => (
            <li className="property-list-item" key={property.id}>
              <Link to={`/properties/${property.case}`} className="property-inner">
                <Img fluid={property.eyeCatchImage.fluid} alt={property.title} />
                <div className="property-text">
                  <p className="property-case">{`CASE${property.case}`}</p>
                  <h3 className="property-title">{property.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/gallery">建築実例をもっと見る</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query IndexPageQuery {
    allContentfulProperty(sort: {fields: case}) {
      edges {
        node {
          id
          case
          title
          body {
            body
          }
          eyeCatchImage {
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
