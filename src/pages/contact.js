import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/heading'

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
        <Heading enText="Contact" jaText="お問合せフォーム" />

        <form
          name="contact"
          method="POST"
          action="/contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={() =>
            alert(
              'お問い合わせいただきありがとうございました。\n内容を確認した後、担当者より連絡いたします。'
            )
          }
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="form-item hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">ご計画内容</span>
              <select name="ご計画内容">
                <option value="新築">新築</option>
                <option value="建替">建替</option>
                <option value="リフォーム">リフォーム</option>
                <option value="その他">その他</option>
              </select>
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">土地について</span>
              <select name="土地について">
                <option value="所有している">所有している</option>
                <option value="契約予定">契約予定</option>
                <option value="検討">検討</option>
              </select>
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">建築予定エリア</span>
              <input
                name="建築予定エリア"
                type="text"
                placeholder="例：兵庫県宝塚市"
              />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">建築予定時期</span>
              <select name="建築予定時期">
                <option value="現在計画中">現在計画中</option>
                <option value="半年以内">半年以内</option>
                <option value="１年以内">１年以内</option>
                <option value="１～２年以内">１～２年以内</option>
                <option value="将来">将来</option>
              </select>
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">建築予算</span>
              <input
                type="text"
                name="建築予算"
                placeholder="例：〇〇万円くらい"
              />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">お問い合わせ内容</span>
              <select name="お問い合わせ内容">
                <option value="カタログ請求">カタログ請求</option>
                <option value="間取りや費用について相談したい">
                  間取りや費用について相談したい
                </option>
                <option value="直接会って相談したい">
                  直接会って相談したい
                </option>
              </select>
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">ご質問等</span>
              <textarea
                name="ご質問等"
                placeholder="ご質問等があればご記載ください。"
              ></textarea>
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text required">お名前</span>
              <input required type="text" name="お名前" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text required">フリガナ</span>
              <input required type="text" name="フリガナ" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text required">メールアドレス</span>
              <input required type="email" name="メールアドレス" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text required">ご住所</span>
              <input required type="text" name="ご住所" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text required">電話番号</span>
              <input required type="tel" name="電話番号" />
            </label>
          </p>

          <p className="form-item">
            <label>
              <span className="label-text">電話連絡可能時間帯</span>
              <textarea
                name="電話連絡可能時間帯"
                placeholder="ご都合のよい時間帯をご記入ください。"
              />
            </label>
          </p>

          <button className="submit-button" type="submit">
            送信
          </button>
        </form>
      </div>
      <style jsx>{style}</style>
    </Layout>
  )
}

export default ContactPage
