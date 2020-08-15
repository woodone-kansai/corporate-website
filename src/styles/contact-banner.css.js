import css from 'styled-jsx/css'

export default css`
  .contact-banner-container {
    background-color: #232323;
    padding: 8px;
    position: fixed;
    bottom: 18%;
    right: 0;
    z-index: 2;
    @media (max-width: 768px) {
      width: 100%;
      bottom: 0;
    }
    :global(.banner-link) {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .book-icon {
        width: 60px;
      }
      .banner-text {
        font-size: 1rem;
        @media (max-width: 768px) {
          font-size: .75rem;
        }
      }
      .play-button {
        display: table;
        border: 1px solid white;
        padding: .5rem;
        margin-left: .5rem;
        img {
          width: 20px;
        }
        span {
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
  }
`
