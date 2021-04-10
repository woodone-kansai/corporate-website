import { global } from 'styled-jsx/css'

export default global`
  body {
    font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
  }

  .mobile {
    @media (min-width: 769px) {
      display: none!important;
    }
  }

  .pc {
    @media (max-width: 768px) {
      display: none!important;
    }
  }

  .anchor-link-target {
    padding-top: 100px;
    margin-top: -100px;
  }
`
