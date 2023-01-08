import css from 'styled-jsx/css'

export default css`
  .recruit {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }
    .description {
      text-align: center;
      color: #3a3a3a;
      margin: 70px auto 30px;
      max-width: 700px;
      line-height: 1.5em;
      white-space: pre-line;
      @media (max-width: 768px) {
        margin: 50px auto 20px;
        padding: 0 10px;
      }
    }

    table {
      width: 100%;
      max-width: 700px;
      margin: auto;
      line-height: 1.3em;
      font-size: 15px;
      tr {
        th {
          width: 16%;
          white-space: nowrap;
          @media (max-width: 768px) {
            font-size: 10px;
          }
        }
        td {
          width: 42%;
          @media (max-width: 768px) {
            font-size: 13px;
          }
        }
        th,
        td {
          text-align: left;
          padding: 10px 8px;
        }
      }
    }
  }
`
