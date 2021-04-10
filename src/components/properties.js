import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Properties = ({ properties }) => {
  return (
    <div className="works-container">
      <div className="heading-works-container">
        <h2 className="heading-works en">WORKS</h2>
        <h2 className="heading-works ja">- 施工事例 -</h2>
      </div>

      <ul className="property-list">
        {properties.map(({ node: property }) => (
          <li className="property-list-item" key={property.id}>
            <Link to={`/properties/${property.case}/`} className="property-inner">
              <Img className="property-image" fluid={property.eyeCatchImage.fluid} alt={property.title} />
              <div className="property-text">
                <p className="property-case">{`CASE${property.case}`}</p>
                <h3 className="property-title">{property.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Properties
