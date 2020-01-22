import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SlideMenu from './slide-menu'
import Header from "./header"
import Footer from "./footer"

import baseStyle from '../styles/base.css'
import resetStyle from '../styles/reset.css'
import swiperStyle from '../styles/swiper.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <div id="outer-container">
        <SlideMenu />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          <main id="main">{children}</main>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        #content {
          margin: 90px auto 0;
          max-width: 960px;
          #main {
            padding: 5px;
            margin-bottom: 40px;
          }
        }
      `}</style>
      <style jsx>
        {resetStyle}
      </style>
      <style jsx>
        {baseStyle}
      </style>
      <style jsx>
        {swiperStyle}
      </style>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
