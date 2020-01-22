import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulAsset(title: {eq: "logo-footer"}) {
        file {
          url
        }
      }
    }
  `)
  const logo = data.contentfulAsset

  return(
    <footer id="footer">
      <div className="footer-top">
        <ul className="footer-menu">
          <li><Link to="/gallery/">建築事例</Link></li>
          <li><Link to="/recruit/">リクルート</Link></li>
          <li><Link to="/about/">会社情報</Link></li>
          <li><Link to="/contact/">資料請求・お問い合わせ</Link></li>
        </ul>
        <div className="tel-container">
          <p className="text">お気軽にご連絡ください</p>
          <p className="tel">0797-84-5732</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo.file.url} alt="WOODONEKANSAI" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
