import css from 'styled-jsx/css'

export default css`
  .property-list {
    display: flex;
    flex-wrap: wrap;
    .property-list-item {
      width: 50%;
      margin-bottom: 20px;
      :global(.property-inner) {
        padding: 10px;
        display: block;
        @media (max-width: 768px) {
          padding: 3px;
        }
        .property-image {
          width: 100%;
        }
        .property-text {
          margin-left: 20px;
          @media (max-width: 768px) {
            margin-left: 5px;
          }
          .property-case {
            color: #000000;
            letter-spacing: 0.5em;
            font-size: 23px;
            margin: 10px 0;
            @media (max-width: 768px) {
              font-size: 15px;
              margin: 7px 0;
            }
          }
          .property-title {
            color: #3a3a3a;
            font-size: 17px;
            @media (max-width: 768px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`
