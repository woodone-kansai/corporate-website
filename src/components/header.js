import React, { Fragment } from 'react'
import { useStaticQuery, Link } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulAsset(title: {eq: "logo-header"}) {
        file {
          url
        }
      }
    }
  `)
  const logo = data.contentfulAsset

  return(
    <Fragment>
      <header id="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo.file.url} alt="WOODONEKANSAI" />
          </Link>
        </div>
        <ul className="header-menu pc">
          <li><Link to="/gallery/">建築事例</Link></li>
          <li><Link to="/recruit/">リクルート</Link></li>
          <li><Link to="#about">会社情報</Link></li>
          <li><Link to="/contact/">資料請求・お問い合わせ</Link></li>
        </ul>
      </header>
      <style jsx global>{`
        header#header {
          max-width: 960px;
          height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          padding: 0 10px;
          position: fixed;
          right: 0;
          left: 0;
          top: 0;
          z-index: 2;
          background-color: #ffffff;
          .header-logo {
            width: 270px;
            @media (max-width: 992px) {
              width: 220px;
            }
            img {
              width: 100%;
            }
          }
          .header-menu {
            display: flex;
            li {
              padding: 0 20px;
              border-right: 1px solid #3a3a3a;
              &:last-child {
                border: none;
                font-weight: bold;
              }
              a {
                font-size: 15px;
                color: #3a3a3a;
              }
            }
          }
        }
      `}</style>
    </Fragment>
  )
}

export default Header
