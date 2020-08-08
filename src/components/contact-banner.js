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
  const iconBook = data.allContentfulAsset.edges[0].node
  const iconPlay = data.allContentfulAsset.edges[1].node
  console.log(iconPlay);

  return(
    <Fragment>
      <div className="contact-banner-container">
        <Link to="/">
          <img src={iconBook.file.url} alt="book icon" />
          <img src={iconPlay.file.url} alt="play icon" />
        </Link>
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  )
}

export default ContactBanner
