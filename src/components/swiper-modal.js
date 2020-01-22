import React, { Component, Fragment } from 'react'
import SwiperLib from 'swiper'

import style from '../styles/swiper-modal.css'

class SwiperModal extends Component {
  componentDidMount() {
    const swiperModal = new SwiperLib('.swiper-container', {
      initialSlide: this.props.index,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiperModal.on('slideChange', () => {
      this.props.onSlideChange(swiperModal.activeIndex)
    });
  }

  render() {
    const { images } = this.props

    return (
      <Fragment>
        <div className="swiper-modal">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                images.map(image => (
                  <div className="swiper-slide" key={`${image.id}-topImage`} style={{ backgroundImage: `url(${image.file.url})` }} />
                ))
              }
            </div>
            <div className="swiper-button-next swiper-button"></div>
            <div className="swiper-button-prev swiper-button"></div>
          </div>
        </div>
        <style jsx>
          {style}
        </style>
      </Fragment>
    )
  }
}

export default SwiperModal
