import React from 'react'
import './Main.css'
import background from '../../background.png'
import { animals } from '../../data.js'
import Animal from '../Animal/Animal'

export default function Main() {
  return (
    <main>
      <img src={background} alt="farmyard" />
      {animals.map((animal) => (
        <Animal key={animal.type} {...animal} />
      ))}
    </main>
  )
}
