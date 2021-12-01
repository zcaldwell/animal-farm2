import React from 'react'
import './Animal.css'

export default function Animal({ name, left, top, type, says }) {
  return (
    <>
      <div className="animal" style={{ left: left, top: top }}>
        <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />

        <p className="name"> {name} </p>

        <p> {says} </p>
      </div>
    </>
  )
}
