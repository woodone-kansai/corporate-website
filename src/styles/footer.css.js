import css from 'styled-jsx/css'

export default css`
  #footer {
    .footer-top {
      background-color: #232323;
      padding: 70px 0;
      text-align: center;
      .footer-menu {
        margin-bottom: 30px;
        li {
          display: inline;
          padding: 0 20px;
          @media (max-width: 768px) {
            display: initial;
            font-size: 10px;
            padding: 0 14px;
            font-size: 10px;
            border-right: 1px solid #ffffff;
            &:last-child {
              border: none;
            }
          }
          :global(a) {
            color: #ffffff;
          }
        }
      }
      .tel-container {
        color: #ffffff;
        border: 1px solid #ffffff;
        padding: 20px 40px;
        display: inline-block;
        .tel {
          font-size: 30px;
          margin-top: 10px;
          :global(a) {
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
    .footer-bottom {
      margin: 50px 0;
      .footer-logo {
        text-align: center;
        img {
          width: 200px;
          @media (max-width: 768px) {
            width: 130px;
          }
        }
      }
    }
  }
`
