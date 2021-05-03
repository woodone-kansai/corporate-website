import css from 'styled-jsx/css'

export default css.global`
  .home {
    .top-image-slider {
      position: relative;
      .top-image-inner {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        .top-text {
          color: #ffffff;
          font-weight: bold;
          font-size: 41px;
          width: 60%;
          @media (max-width: 768px) {
            font-size: 19px;
            width: 75%;
          }
          .top-text-right {
            text-align: right;
          }
        }
      }
    }
    .description {
      color: #3a3a3a;
      margin: 70px auto;
      max-width: 700px;
      line-height: 1.5em;
      font-size: 16px;
      @media (max-width: 768px) {
        margin: 30px auto;
        padding: 0 10px;
      }
    }

    .list-section {
      margin-bottom: 120px;
      @media (max-width: 768px) {
        margin-bottom: 100px;
      }
      .heading-container {
        margin-bottom: 24px;
      }
    }

    .new-properties-section {
      .gallery-link-container {
        text-align: center;
        margin-top: 40px;
        .gallery-link {
          display: inline-block;
          padding: 15px 35px;
          background-color: #404040;
          text-align: center;
          color: white;
          font-size: 25px;
          border-radius: 2px;
          @media (max-width: 768px) {
            font-size: 17px;
          }
        }
      }
    }
  }
`
