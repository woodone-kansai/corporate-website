import css from 'styled-jsx/css'

export default css`
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
            :global(.steps) {
              display: flex;
              :global(.step) {
                width: 100%;
                text-align: center;
                padding-top: 5px;
                margin-right: 1px;
                color: #9c9c9b;
                border-top: 5px solid #9c9c9b;
                :global(span) {
                  writing-mode: vertical-rl;
                }
              }
              :global(.step.done) {
                color: #3a3a3a;
                border-top: 5px solid black;
              }
            }
          }
        }
      }
    }
  }
`
