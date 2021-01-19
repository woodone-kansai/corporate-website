import React from 'react'
import { Link } from 'gatsby'

import iconInstagram from '../images/icon-instagram.png'
import iconLine from '../images/icon-line.png'
import iconBook from '../images/icon-book.png'

import style from '../styles/contact-banner.css'

const ContactBanner = () => (
  <div className="contact-banner-container">
    <a className="icon-banner icon-instagram" href="https://www.instagram.com/woodonekansai20/" target="_blank">
      <img src={iconInstagram} alt="instagram icon" />
    </a>
    <a className="icon-banner icon-line" href="https://lin.ee/hG96XVr" target="_blank">
      <img src={iconLine} alt="line icon" />
    </a>
    <Link className="banner-link" to="/contact">
      <img className="icon-book" src={iconBook} alt="book icon" />
      <p className="banner-text">
        【無料】施工事例集を取り寄せる
      </p>
    </Link>

    <style jsx>
      {style}
    </style>
  </div>
)

export default ContactBanner
