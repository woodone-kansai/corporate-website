import React, { Component } from 'react'
import SwiperLib from 'swiper'

class Swiper extends Component {
  componentDidMount() {
    const { showButton = false } = this.props
    
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
    this.showButton = showButton
  }

  render() {
    const { topImages, thumbImages } = this.props

    return (
      <div className="swipe-thumb">
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {
              topImages.map(ti => (
                <div className="swiper-slide" key={`${ti.id}-topImage`} style={{ backgroundImage: `url(${ti.file.url})` }} />
              ))
            }
          </div>
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
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
    )
  }
}

export default Swiper
