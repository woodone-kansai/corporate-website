import React from "react"
import { Link } from "gatsby"
import logo from '../images/logo-footer.jpg'

const Footer = () => (
  <footer id="footer">
    <div className="footer-top">
      <ul className="footer-menu">
        <li><Link to="/gallery">建築事例</Link></li>
        <li><Link to="/recruit">リクルート</Link></li>
        <li><Link to="/company">会社情報</Link></li>
        <li><Link to="/contact">資料請求・お問い合わせ</Link></li>
      </ul>
      <div className="tel-container">
        <p className="text">お気軽にご連絡ください</p>
        <p className="tel">0797−84−5732</p>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-logo">
        <Link to="/">
          <img src={logo} alt="WOODONEKANSAI" />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
