import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const MobileMenu = () => (
  <Menu right className={ 'mobile-menu' }>
    <Link to="/gallery">建築事例</Link>
    <Link to="/recruit">リクルート</Link>
    <Link to="/company">会社情報</Link>
    <Link to="/contact">資料請求・お問い合わせ</Link>
  </Menu>
)

export default MobileMenu
