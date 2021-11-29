import React from 'react'
import './Animal.css'

export default function Animal(props) {
  return (
    <>
      <div className="animal" style={{ left: props.left, top: props.top }}>
        <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />

        <p className="name"> {props.name} </p>

        <p> {props.says} </p>
      </div>
    </>
  )
}
