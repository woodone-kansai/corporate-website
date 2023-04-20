import React from 'react'
import Heading from '../components/heading'

import style from '../styles/about.css'

const AboutPage = () => (
  <>
    <div className="about">
      <Heading enText="COMPANY" jaText="会社概要" />

      <p className="description">おかげさまで20周年</p>

      <table>
        <tbody>
          <tr>
            <th>商号</th>
            <td>株式会社ウッドワン関西</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>宝塚事務所：〒665-0864 兵庫県宝塚市泉町25番1号1F</td>
          </tr>
          <tr>
            <th></th>
            <td>
              芦屋事務所：〒659-0062 兵庫県芦屋市宮塚町12番19号 ブルーノ芦屋205
            </td>
          </tr>
          <tr>
            <th></th>
            <td>野上展示場：〒665-0022 兵庫県宝塚市野上3丁目8-21</td>
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
            <td>2003年 株式会社ウッドワン関西設立</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>10,000,000円</td>
          </tr>
          <tr>
            <th>従業員数</th>
            <td>26名</td>
          </tr>
          <tr>
            <th>保有資格</th>
            <td>一級建築士2名</td>
          </tr>
          <tr>
            <th></th>
            <td>二級建築士4名</td>
          </tr>
          <tr>
            <th></th>
            <td>二級建築施工管理技士1名</td>
          </tr>
          <tr>
            <th></th>
            <td>木造耐震改修技術者1名</td>
          </tr>
          <tr>
            <th></th>
            <td>増改築相談員1名</td>
          </tr>
          <tr>
            <th>建築業許可</th>
            <td>兵庫県知事許可（般‐30）第301352号</td>
          </tr>
          <tr>
            <th>一級建築士事務所</th>
            <td>兵庫県知事許可（一級） 第01A05003号</td>
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
          <tr>
            <th></th>
            <td>JAS構造材活用拡大事業者登録</td>
          </tr>
        </tbody>
      </table>
    </div>
    <style jsx>{style}</style>
  </>
)

export default AboutPage
