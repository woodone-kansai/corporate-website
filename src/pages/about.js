import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import style from '../styles/about.css'

const AboutPage = () => {
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
      <SEO title="会社概要" description={metaDescription} />
      <div className="about">
        <div className="heading-about-container">
          <h2 className="heading-about en">COMPANY</h2>
          <hr />
          <h2 className="heading-about ja">会社概要</h2>
        </div>

        <p className="description">
          おかげさまで20周年
        </p>

        <table>
          <tbody>
            <tr>
              <th>商号</th>
              <td>株式会社ウッドワン関西</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒665-0864 兵庫県宝塚市泉町25番1号 ヴィラミナミⅡ 1F</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>0797-84-5732</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>0797-85-5411</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>鳥井　聰</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2000年 株式会社ウエステックス設立</td>
            </tr>
            <tr>
              <th></th>
              <td>2003年 株式会社ウエステックスより社名変</td>
            </tr>
            <tr>
              <th></th>
              <td>2003年 株式会社ウッドワン関西設立</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>10,000,000円</td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>7名</td>
            </tr>
            <tr>
              <th>建築業許可</th>
              <td>兵庫県知事許可（般‐30）第301352号</td>
            </tr>
            <tr>
              <th>二級建築士事務所</th>
              <td>兵庫県知事許可（二級） 第02A01301号</td>
            </tr>
            <tr>
              <th>所属団体</th>
              <td>財団法人 住宅保証機構</td>
            </tr>
            <tr>
              <th></th>
              <td>株式会社 日本住宅保証検査機構</td>
            </tr>
            <tr>
              <th></th>
              <td>ジャパンホームシールド株式会社</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {style}
      </style>
    </Layout>
  )
}

export default AboutPage
