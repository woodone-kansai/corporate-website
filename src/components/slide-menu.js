import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const SlideMenu = () => (
  <Fragment>
    <Menu right className={ 'mobile-menu' } overlayClassName={ "mm-overlay" }>
      <Link className="mm-item" to="/gallery/">建築事例</Link>
      <Link className="mm-item" to="/recruit/">リクルート</Link>
      <Link className="mm-item" to="#about">会社情報</Link>
      <Link className="mm-item" to="/contact/">資料請求・お問い合わせ</Link>
    </Menu>
    <style jsx global>{`
      #outer-container {
        .mm-overlay {
          top: 0;
        }
        .mobile-menu {
          top: 0;
          .mm-item {
            color: #ffffff;
            padding: 23px 0;
            &:focus {
              outline: none;
            }
          }
        }
        .bm-burger-button {
          top: 33px;
          right: 20px;
          left: unset;
          width: 30px;
          height: 24px;
          span {
            height: 8%!important;
          }
          @media (min-width: 769px) {
            display: none!important;
          }
          .bm-burger-bars-hover {
            opacity: 0.5!important;
            background: #373a47;
          }
        }
      }
    `}</style>
    <style jsx global>{`
      /* Position and sizing of burger button */
      .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
      }
      /* Color/shape of burger icon bars */
      .bm-burger-bars {
        background: #373a47;
      }
      /* Color/shape of burger icon bars on hover*/
      .bm-burger-bars-hover {
        background: #a90000;
      }
      /* Position and sizing of clickable cross button */
      .bm-cross-button {
        height: 24px;
        width: 24px;
      }
      /* Color/shape of close button cross */
      .bm-cross {
        background: #bdc3c7;
      }
      /*
      Sidebar wrapper styles
      Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
      */
      .bm-menu-wrap {
        position: fixed;
        height: 100%;
      }
      /* General sidebar styles */
      .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }
      /* Morph shape necessary with bubble or elastic */
      .bm-morph-shape {
        fill: #373a47;
      }
      /* Wrapper for item list */
      .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
      }
      /* Individual item */
      .bm-item {
        display: inline-block;
      }
      /* Styling of overlay */
      .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </Fragment>
)

export default SlideMenu
