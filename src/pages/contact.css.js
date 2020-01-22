import css from 'styled-jsx/css'

export default css`
  .contact {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }
    .heading-contact-container {
      hr {
        margin: 15px 0;
      }
      .heading-contact {
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

    form {
      max-width: 500px;
      margin: 50px auto;
      .form-item {
        margin-bottom: 30px;
        display: flex;
        label {
          flex-basis: 40%;
          margin-right: 10px;
          font-size: 15px;
          @media (max-width: 768px) {
            font-size: 12px;
          }
          &.required {
            &::before {
              content: '*';
              color: red;
              padding-right: 4px;
            }
          }
        }
        input, select, textarea {
          font-size: 15px;
          @media (max-width: 768px) {
            font-size: 12px;
          }
          flex-basis: 60%;
          border: 1px solid grey;
          padding: 5px;
          background-color: white;
        }
        textarea {
          height: 45px;
        }
      }
      .submit-button {
        border: none;
        display: block;
        width: 60%;
        margin: auto;
        background-color: #404040;
        color: white;
        font-size: 21px;
        border-radius: 2px;
        padding: 10px 30px;
        @media (max-width: 768px) {
          font-size: 17px;
        }
      }
    }
  }
`
