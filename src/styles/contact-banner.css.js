import css from 'styled-jsx/css'
import bgWithBookPc from '../images/bg-with-book-pc.png'
import bgWithBookSp from '../images/bg-with-book-sp.png'

export default css`
  .contact-banner-container {
    padding: 8px;
    position: fixed;
    bottom: 18%;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      bottom: 0;
      padding: 0px;
    }
    .icon-banner {
      img {
        width: 60px;
        @media (max-width: 768px) {
          width: 50px;
        }
      }
      &.icon-instagram, &.icon-line {
        margin-bottom: 16px;
        background-color: black;
        @media (max-width: 768px) {
          margin-bottom: 0;
          margin-right: 4px;
        }
      }
    }
    :global(.banner-link) {
      .icon-book {
        width: 60px;
        @media (max-width: 768px) {
          width: 50px;
        }
      }
      color: white;
      background-color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
      }
      .banner-text {
        font-size: 1rem;
        writing-mode: vertical-rl;
        margin-top: -8px;
        margin-bottom: 16px;
        @media (max-width: 768px) {
          font-size: 14px;
          writing-mode: initial;
          margin: 0 0 0 -8px;
        }
      }
    }
  }
`
