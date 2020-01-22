import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import style from '../styles/contact.css'

const ContactPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaDescription = site.siteMetadata.description

  return (
    <Layout>
      <SEO title="お問合せフォーム" description={metaDescription} />
      <div className="contact">
        <div className="heading-contact-container">
          <h2 className="heading-contact en">Contact</h2>
          <hr />
          <h2 className="heading-contact ja">お問合せフォーム</h2>
        </div>

        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >

          <input type="hidden" name="form-name" value="contact" />

          <p className="form-item">
            <label>ご計画内容</label>
            <select name="ご計画内容">
              <option value="新築">新築</option>
              <option value="建替">建替</option>
              <option value="リフォーム">リフォーム</option>
              <option value="その他">その他</option>
            </select>
          </p>

          <p className="form-item">
            <label>土地について</label>
            <select name="土地について">
              <option value="所有している">所有している</option>
              <option value="契約予定">契約予定</option>
              <option value="検討">検討</option>
            </select>
          </p>

          <p className="form-item">
            <label>建築予定エリア</label>
            <input name="建築予定エリア" type="text" placeholder="例：兵庫県宝塚市"/>
          </p>

          <p className="form-item">
            <label>建築予定時期</label>
            <select name="建築予定時期">
              <option value="現在計画中">現在計画中</option>
              <option value="半年以内">半年以内</option>
              <option value="１年以内">１年以内</option>
              <option value="１～２年以内">１～２年以内</option>
              <option value="将来">将来</option>
            </select>
          </p>

          <p className="form-item">
            <label>建築予算</label>
            <input type="text" name="建築予算" placeholder="例：〇〇万円くらい"/>
          </p>

          <p className="form-item">
            <label>お問合内容</label>
            <select name="お問い合わせ内容">
              <option value="カタログ請求">カタログ請求</option>
              <option value="間取りや費用について相談したい">間取りや費用について相談したい</option>
              <option value="直接会って相談したい">直接会って相談したい</option>
            </select>
          </p>

          <p className="form-item">
            <label>ご質問等</label>
            <textarea name="ご質問等" placeholder="ご質問等があればご記載ください。"></textarea>
          </p>

          <p className="form-item">
            <label className="required">お名前</label>
            <input required type="text" name="お名前"/>
          </p>

          <p className="form-item">
            <label className="required">フリガナ</label>
            <input required type="text" name="フリガナ"/>
          </p>

          <p className="form-item">
            <label className="required">メールアドレス</label>
            <input required type="email" name="メールアドレス"/>
          </p>

          <p className="form-item">
            <label className="required">ご住所</label>
            <input required type="text" name="ご住所"/>
          </p>

          <p className="form-item">
            <label className="required">電話番号</label>
            <input required type="tel" name="電話番号"/>
          </p>

          <p className="form-item">
            <label>電話連絡可能時間帯</label>
            <input type="text" name="電話連絡可能時間帯" placeholder="※ご都合のよい時間帯をご記入ください。"/>
          </p>

          <button className="submit-button" type="submit">送信</button>
        </form>
      </div>
      <style jsx>
        {style}
      </style>
    </Layout>
  )
}

export default ContactPage
