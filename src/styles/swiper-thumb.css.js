import css from 'styled-jsx/css'

export default css`
  .swiper-thumb {
    .swiper-container {
      &.gallery-top {
        height: 400px;
        width: 100%;
        .swiper-slide {
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
      &.gallery-thumbs {
        margin: 10px 0;
        .swiper-slide {
          opacity: 0.4;
          &.swiper-slide-thumb-active {
            opacity: 1;
          }
          div {
            padding-top: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
      .swiper-button {
        color: #636363;
      }
    }
  }
`
