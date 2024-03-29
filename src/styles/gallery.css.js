import css from 'styled-jsx/css'

export default css`
  .gallery {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }
    .description {
      color: #3a3a3a;
      margin: 70px auto;
      max-width: 700px;
      line-height: 1.5em;
      white-space: pre-line;
      @media (max-width: 768px) {
        margin: 30px auto;
        padding: 0 10px;
      }
    }
    .category-list {
      display: flex;
      flex-wrap: wrap;
      .category-list-item {
        width: 50%;
        margin-bottom: 25px;
        :global(.category-inner) {
          display: block;
          padding: 10px;
          @media (max-width: 768px) {
            padding: 3px;
          }
          .category-text {
            width: 80%;
            background-color: white;
            position: relative;
            margin-top: -30px;
            padding: 12px 20px;
            @media (max-width: 768px) {
              margin-top: -20px;
              padding: 5px 7px;
            }
            .category-title {
              &.en {
                color: #000000;
                letter-spacing: 0.5em;
                font-size: 23px;
                margin: 10px 0;
                @media (max-width: 768px) {
                  letter-spacing: 0.4em;
                  font-size: 14px;
                  margin: 6px 0;
                }
              }
              &.ja {
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
    }
  }
`
