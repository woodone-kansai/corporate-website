import React, { Component } from 'react'
import SwiperLib from 'swiper'

class Swiper extends Component {
  componentDidMount() {
    const { showButton = false } = this.props
    
    const galleryThumbs = new SwiperLib('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
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
      <div className="swiper">
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {
              topImages.map(ti => (
                <img className="swiper-slide" key={`${ti.id}-topImage`} src={ti.file.url} alt={ti.id} />
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
                <img className="swiper-slide" key={`${ti.id}-topImage`} src={ti.file.url} alt={ti.id} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Swiper
