import React, { Component, Fragment } from 'react'
import SwiperLib from 'swiper'

import style from '../styles/swiper-thumb.css'

class Swiper extends Component {
  componentDidMount() {
    const galleryThumbs = new SwiperLib('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    new SwiperLib('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  render() {
    const { topImages, thumbImages } = this.props

    return (
      <Fragment>
        <div className="swiper-thumb">
          <div className="swiper-container gallery-top">
            <div className="swiper-wrapper">
              {
                topImages.map(ti => (
                  <div className="swiper-slide" key={`${ti.id}-topImage`} style={{ backgroundImage: `url(${ti.file.url})` }} />
                ))
              }
            </div>
            <div className="swiper-button-next swiper-button"></div>
            <div className="swiper-button-prev swiper-button"></div>
          </div>
          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              {
                thumbImages.map(ti => (
                  <div className="swiper-slide" key={`${ti.id}-thumbImage`}>
                    <div style={{ backgroundImage: `url(${ti.file.url})` }} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <style jsx>
          {style}
        </style>
      </Fragment>
    )
  }
}

export default Swiper
