import React from 'react'
import { Link, graphql } from 'gatsby'

import Properties from '../components/properties'
import Projects from '../components/projects'
import Swiper from '../components/swiper'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBanner from '../components/contact-banner'
import About from '../components/about'

import style from '../styles/index.css'

const IndexPage = ({ data }) => {
  const properties = data.allContentfulProperty.edges
  const projects = data.allContentfulPropertyInProgress.edges
  const slides = data.allContentfulAsset.edges

  return (
    <Layout>
      <SEO title="トップページ"/>

      <ContactBanner />

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

        <section className="works-section">
          <Properties properties={properties} />

          <div className="gallery-link-container">
            <Link className="gallery-link" to="/gallery/">
              カテゴリー別にもっと見る &gt;
            </Link>
          </div>
        </section>

        <section className="projects-section">
          <Projects projects={projects} />
        </section>

        <section className="about-section anchor-link-target" id="about">
          <About />
        </section>
      </div>

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
    allContentfulPropertyInProgress(sort: {fields: order}) {
      edges {
        node {
          id
          title
          projectType
          progress
          order
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
