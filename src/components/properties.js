import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from '../styles/properties.css'

const Properties = ({ properties }) => {
  return (
    <ul className="property-list">
      {properties.map(({ node: property }) => (
        <li className="property-list-item" key={property.id}>
          <Link to={`/properties/${property.id}/`} className="property-inner">
            <Img className="property-image" fluid={property.eyeCatchImage.fluid} alt={property.title} />
            <div className="property-text">
              <p className="property-case">{`CASE${property.case}`}</p>
              <h3 className="property-title">{property.title}</h3>
            </div>
          </Link>
        </li>
      ))}
      <style jsx>{styles}</style>
    </ul>
  )
}

export default Properties
