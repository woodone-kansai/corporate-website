import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-header.jpg'

const Header = () => (
  <header id="header">
    <div className="header-logo">
      <Link to="/">
        <img src={logo} alt="WOODONEKANSAI" />
      </Link>
    </div>
    <ul className="header-menu pc">
      <li><Link to="/gallery">建築事例</Link></li>
      <li><Link to="/recruit">リクルート</Link></li>
      <li><Link to="/company">会社情報</Link></li>
      <li><Link to="/contact">資料請求・お問い合わせ</Link></li>
    </ul>
  </header>
)

export default Header
