import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const SlideMenu = () => (
  <Menu right className={ 'mobile-menu' }>
    <Link className="mm-item" to="/gallery">建築事例</Link>
    <Link className="mm-item" to="/recruit">リクルート</Link>
    <Link className="mm-item" to="/company">会社情報</Link>
    <Link className="mm-item" to="/contact">資料請求・お問い合わせ</Link>
  </Menu>
)

export default SlideMenu
