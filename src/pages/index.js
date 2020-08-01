import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Swiper from '../components/swiper';

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'

import style from '../styles/index.css'

const IndexPage = ({ data }) => {
  const properties = data.allContentfulProperty.edges
  const slides = data.allContentfulAsset.edges

  return (
    <Layout>
      <SEO title="トップページ"/>

      <div className="home">
        <div className="top-image-slider">
          <Swiper options={{
            autoplay: {
              delay: 5000,
            },
            speed: 1000,
            loop: true,
          }}>
            {
              slides.map((s, i) => (
                <img className="swiper-slide" src={s.node.file.url} alt={`slide-${i}`} key={s.node.id} />
              ))
            }
          </Swiper>

          <div className="top-image-inner">
            <div className="top-text">
              <div className="top-text-left">
                <h1>理想の住まいを叶える。</h1>
              </div>
              <br />
              <div className="top-text-right">
                <h1>ウッドワン関西。</h1>
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
              <Link to={`/properties/${property.case}/`} className="property-inner">
                <Img className="property-image" fluid={property.eyeCatchImage.fluid} alt={property.title} />
                <div className="property-text">
                  <p className="property-case">{`CASE${property.case}`}</p>
                  <h3 className="property-title">{property.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="gallery-link-container" id="about">
          <Link className="gallery-link" to="/gallery/">
            建築実例をもっと見る &gt;
          </Link>
        </div>
      </div>

      <About />

      <style jsx global>
        {style}
      </style>
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
          eyeCatchImage {
            fluid(maxWidth: 455) {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
        }
      }
    }
    allContentfulAsset(filter: {title: {regex: "/^top-slide-/"}}, sort: {fields: title}) {
      edges {
        node {
          id
          file {
            url
          }
        }
      }
    }
  }
`
