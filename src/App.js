import React, { useState, useEffect } from 'react'
import shuffle from './utilities/shuffles'
import Card from './components/Card'

import './App.css'

function App() {
  const [cards, setCards] = useState(shuffle)
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)

  const [disabled, setDisabled] = useState(null)
  const [wins, setWins] = useState(null)

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card)
    }
  }
  useEffect(() => {
    let pickTimer
    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.image === pickOne.image) {
              return {...card, matched: true}
              
            } else {
              return card
            }
          })
        })
        handleTurn()
      } else {
        setDisabled(true)
        pickTimer = setTimeout(() => {
         handleTurn() 
        }, 1000)
      }
    }
  })
  const handleTurn = () => {
    setPickOne(null)
    setPickTwo(null)
    setDisabled(false)
  }
  
  return (
    <div className="grid">
      {cards.map((card) => {
        const { image, id, matched } = card

        return (
          <Card
            key={id}
            image={image}
            selected={card === pickOne || card === pickTwo || matched}
            onClick={() => handleClick(card)}
          />
        )
      })}
    </div>
  )
}

export default App
