import css from 'styled-jsx/css'

export default css`
  .contact {
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 27px;
    }

    form {
      max-width: 500px;
      margin: 50px auto;
      @media (max-width: 768px) {
        padding: 0 5px;
        margin: 40px auto 0;
      }
      .form-item {
        margin-bottom: 30px;
        &.hidden {
          display: none;
        }
        label {
          display: flex;
          .label-text {
            width: 40%;
            padding-right: 10px;
            padding-top: 5px;
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
            width: 60%;
            border: 1px solid grey;
            padding: 5px;
            background-color: white;
          }
          textarea {
            height: 45px;
          }
        }
      }
      .submit-button {
        cursor: pointer;
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
