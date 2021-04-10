import css from 'styled-jsx/css'

export default css`
  .about {
    .description {
      text-align: center;
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

    table {
      width: 100%;
      max-width: 700px;
      margin: auto;
      line-height: 1.3em;
      tr {
        th {
          width: 30%;
        }
        td {
          width: 70%;
        }
        th, td {
          text-align: left;
          padding: 10px 8px;;
        }
      }
    }
  }
`
