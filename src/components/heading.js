import React from 'react'
import style from '../styles/heading.css'

const Heading = ({ enText, jaText }) => {
  return (
    <>
      <div className="heading-container">
        <h2 className="heading en">{enText}</h2>
        <hr />
        <h2 className="heading ja">{jaText}</h2>
      </div>

      <style jsx>
        {style}
      </style>
    </>
  )
}

export default Heading
