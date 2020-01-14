import React from 'react'
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
    <header id="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo.file.url} alt="WOODONEKANSAI" />
        </Link>
      </div>
      <ul className="header-menu pc">
        <li><Link to="/gallery">建築事例</Link></li>
        <li><Link to="/recruit">リクルート</Link></li>
        <li><Link to="/about">会社情報</Link></li>
        <li><Link to="/contact">資料請求・お問い合わせ</Link></li>
      </ul>
    </header>
  )
}

export default Header
