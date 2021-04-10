import css from 'styled-jsx/css'

export default css.global`
  .home {
    .top-image-slider {
      position: relative;
      .top-image-inner {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        .top-text {
          color: #ffffff;
          font-weight: bold;
          font-size: 41px;
          width: 60%;
          @media (max-width: 768px) {
            font-size: 19px;
            width: 75%;
          }
          .top-text-right {
            text-align: right;
          }
        }
      }
    }
    .description {
      color: #3a3a3a;
      margin: 70px auto;
      max-width: 700px;
      line-height: 1.5em;
      font-size: 16px;
      @media (max-width: 768px) {
        margin: 30px auto;
        padding: 0 10px;
      }
    }
    .heading-works-container {
      margin-bottom: 20px;
      .heading-works {
        color: #3a3a3a;
        text-align: center;
        &.en {
          font-size: 30px;
          letter-spacing: 0.5em;
          margin-bottom: 10px;
        }
        &.ja {
          font-size: 20px;
        }
      }
    }

    .works-section {
      .works-container {
        .property-list {
          display: flex;
          flex-wrap: wrap;
          .property-list-item {
            width: 50%;
            margin-bottom: 20px;
            .property-inner {
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
      }
    }

    .projects-section {
      .projects-container {
        .project-list {
          display: flex;
          flex-wrap: wrap;
          .project-list-item {
            width: 50%;
            margin-bottom: 20px;
            .project-inner {
              padding: 10px;
              display: block;
              @media (max-width: 768px) {
                padding: 3px;
              }
              .project-image {
                width: 100%;
              }
              .project-info {
                margin: 16px 20px 0;
                color: #3a3a3a;
                @media (max-width: 768px) {
                  margin: 8px 5px 0;
                  font-size: 13px;
                }
                .project-text {
                  font-size: 16px;
                  font-weight: bold;
                  display: flex;
                  margin-bottom: 16px;
                  @media (max-width: 768px) {
                    font-size: 10px;
                    margin-bottom: 8px;
                  }
                  .project-title {
                    padding-right: 8px;
                    border-right: 1px solid #3a3a3a;
                  }
                  .project-type {
                    padding-left: 8px;
                  }
                }
                .project-progress {
                  .steps {
                    display: flex;
                    .step {
                      width: 100%;
                      text-align: center;
                      padding-top: 5px;
                      margin-right: 1px;
                      color: #9c9c9b;
                      border-top: 5px solid #9c9c9b;
                      &.done {
                        color: #3a3a3a;
                        border-top: 5px solid black;
                      }
                      span {
                        writing-mode: vertical-rl;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .gallery-link-container {
      text-align: center;
      margin: 40px 0 30px;
      .gallery-link {
        display: inline-block;
        padding: 15px 35px;
        background-color: #404040;
        text-align: center;
        color: white;
        font-size: 25px;
        border-radius: 2px;
        @media (max-width: 768px) {
          font-size: 17px;
        }
      }
    }
  }
`
