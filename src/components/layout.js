import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MobileMenu from './mobile-menu'
import Header from "./header"
import Footer from "./footer"

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
        <MobileMenu />
        <div id="content">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
