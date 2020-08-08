import React, { Fragment } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import style from '../styles/contact-banner.css'

const ContactBanner = () => {
  const data = useStaticQuery(graphql`
    query ContactBannerQuery {
      allContentfulAsset(filter: { title: { in: ["icon-book", "icon-play"] } }) {
        edges {
          node {
            file {
              url
            }
          }
        }
      }
    }
  `)
  const iconPlay = data.allContentfulAsset.edges[0].node
  const iconBook = data.allContentfulAsset.edges[1].node

  return(
    <Fragment>
      <div className="contact-banner-container">
        <Link className="banner-link" to="/contact">
          <img className="book-icon" src={iconBook.file.url} alt="book icon" />
          <p className="banner-text">【無料】施工事例集を取り寄せる</p>
          <div className="play-button">
            <img src={iconPlay.file.url} alt="play icon" />
            <span>詳細</span>
          </div>
        </Link>
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  )
}

export default ContactBanner
