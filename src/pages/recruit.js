import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBanner from '../components/contact-banner'
import Heading from '../components/heading'

import style from '../styles/recruit.css'

const RecruitPage = () => {
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
      <SEO title="求人情報" description={metaDescription} />
      <ContactBanner />

      <div className="recruit">
        <Heading
          enText="RECRUIT"
          jaText="求人情報"
        />

        <p className="description">
          募集要項
        </p>

        <table>
          <tbody>
            <tr>
              <th>勤務時間</th>
              <td>9：00～18：00</td>
              <td></td>
            </tr>
            <tr>
              <th>休暇</th>
              <td>※施工管理</td>
              <td>日曜・水曜</td>
            </tr>
            <tr>
              <th></th>
              <td>
                ※設計<br />(コーディネーター含)
              </td>
              <td>火曜・水曜</td>
            </tr>
            <tr>
              <th></th>
              <td>※住宅営業</td>
              <td>火曜・水曜</td>
            </tr>
            <tr>
              <th></th>
              <td>※法人営業</td>
              <td>土曜・日曜</td>
            </tr>
            <tr>
              <th></th>
              <td colSpan="2">年末年始休暇・夏季休暇・有給休暇（初年度10日※入社月により若干変動有）</td>
            </tr>
            <tr>
              <th></th>
              <td colSpan="2">慶弔休暇、特別休暇（生理・出産・公傷・交通遮断）等</td>
            </tr>
            <tr>
              <th>福利厚生</th>
              <td colSpan="2">保険：健康・厚生年金・雇用</td>
            </tr>
            <tr>
              <th>お問合せ</th>
              <td colSpan="2">株式会社ウッドワン関西</td>
            </tr>
            <tr>
              <th></th>
              <td colSpan="2">info.woodonekansai@gmail.com</td>
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

export default RecruitPage
