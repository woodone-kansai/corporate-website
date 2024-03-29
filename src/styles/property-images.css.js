import css from 'styled-jsx/css'

export default css`
  .property-images {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }
    .description {
      color: #3a3a3a;
      margin: 70px auto;
      max-width: 700px;
      line-height: 1.5em;
      @media (max-width: 768px) {
        margin: 30px auto;
        padding: 0 10px;
      }
    }
    .property-image-container {
      display: flex;
      flex-wrap: wrap;
      .property-image-item {
        flex: 0 1 25%;
        cursor: pointer;
        .property-image-inner {
          padding: 5px;
          display: block;
          @media (max-width: 768px) {
            padding: 1px;
          }
        }
      }
    }
    .gallery-modal-container {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      .gallery-modal {
        width: 70%;
        height: 70%;
        padding: 30px;
        background-color: #ffffff;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 992px) {
          height: 45%;
        }
        @media (max-width: 768px) {
          width: 90%;
        }
        .close-button {
          cursor: pointer;
          position: absolute;
          top: 15px;
          right: 15px;
          width: 24px;
          height: 24px;
          text-align: center;
          &::after, &::before {
            content: '';
            background-color: #000000;
            height: 24px;
            width: 1px;
            position: absolute;
            top: -1px;
          }
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
          &::hover {
          cursor: pointer;
          }
        }
        :global(.property-link) {
          display: inline-block;
          padding: 15px 35px;
          background-color: #404040;
          text-align: center;
          color: #ffffff;
          font-size: 25px;
          border-radius: 2px;
          margin: 30px auto 0;
          @media (max-width: 768px) {
            font-size: 15px;
          }
        }
      }
    }
  }
`
