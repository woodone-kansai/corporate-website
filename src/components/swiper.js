import React, { Component, Fragment } from 'react'
import SwiperLib from 'swiper'

class Swiper extends Component {
  componentDidMount() {
    const { options = {}, showButton = false } = this.props
    const defaultOption = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
    
    this.swiper = new SwiperLib('.swiper-container', Object.assign(options, defaultOption))
    this.showButton = showButton
  }

  render() {
    const { children } = this.props

    return (
      <div className="swiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {children}
          </div>
          {
            this.showButton ? (
              <Fragment>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </Fragment>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default Swiper
