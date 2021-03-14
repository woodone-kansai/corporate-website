import css from 'styled-jsx/css'

export default css`
  .contact-banner-container {
    position: fixed;
    bottom: 18%;
    margin-left: 960px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    @media (max-width: 1100px) {
      margin: 0px;
      right: 5px;
    }
    @media (max-width: 599px) {
      flex-direction: row;
      width: 100%;
      bottom: 0;
      right: 0;
      padding: 0px;
    }
    .icon-banner {
      img {
        width: 60px;
        @media (max-width: 599px) {
          width: 50px;
        }
      }
      &.icon-instagram, &.icon-line {
        margin-bottom: 16px;
        background-color: black;
        @media (max-width: 599px) {
          margin-bottom: 0;
          margin-right: 4px;
        }
      }
    }
    :global(.banner-link) {
      .icon-book {
        width: 60px;
        @media (max-width: 599px) {
          width: 50px;
        }
      }
      color: white;
      background-color: black;
      display: block;
      @media (max-width: 599px) {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .banner-text {
        font-size: 1rem;
        writing-mode: vertical-rl;
        margin: -8px auto 16px;
        @media (max-width: 599px) {
          font-size: 14px;
          writing-mode: initial;
          margin: 0 0 0 -8px;
        }
      }
    }
  }
`
