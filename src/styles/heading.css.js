import css from 'styled-jsx/css'

export default css`
  .heading-container {
    hr {
      margin: 15px 0;
    }
    .heading {
      color: #3a3a3a;
      text-align: center;
      &.en {
        font-size: 30px;
        letter-spacing: 0.5em;
      }
      &.ja {
        font-size: 20px;
      }
    }
  }
`
