import React from 'react'
import { useAuthState, useUserDispatch } from '@legible/context-provider'

const CreditCardInfo = ({ card }) => {
  const { session } =  useAuthState()
  const { jwtToken } = session
  const { detachCard } = useUserDispatch()

  const removeCard = () => detachCard(jwtToken, card.id)

  return (
    <>
      <p>{card.last4}</p>
      <p>{card.exp_month} / {card.exp_year}</p>
      <button onClick={removeCard}>Remove</button>
    </>
  )
}

export default CreditCardInfo