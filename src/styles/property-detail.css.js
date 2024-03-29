import css from 'styled-jsx/css'

export default css`
  .property-detail {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }
    .heading-property-container {
      margin-bottom: 20px;
      hr {
        margin: 15px 0;
      }
      .heading-property {
        color: #3a3a3a;
        text-align: center;
        &:nth-child(1) {
          font-size: 30px;
          letter-spacing: 0.5em;
          line-height: 1.4em;
          @media (max-width: 768px) {
            font-size: 23px;
          }
        }
        &:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .description {
      border-top: 1px solid #3a3a3a;
      border-bottom: 1px solid #3a3a3a;
      padding: 20px;
      margin: 50px 0 70px;
      @media (max-width: 768px) {
        padding: 15px 5px;
        margin: 40px 0 20px;
      }
      .property-body {
        color: #3a3a3a;
        line-height: 1.5em;
        font-size: 17px;
        white-space: pre-line;
      }
      .property-tags {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
        .property-tag {
          padding: 10px 15px;
          background-color: #777777;
          margin: 5px 10px 5px 0;
          color: #ffffff;
          border-radius: 2px;
          word-break: keep-all;
          font-size: 15px;
        }
      }
      .property-spec {
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
`
