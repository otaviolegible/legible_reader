import React from 'react'
import { useAuthState, useUserState, useUserDispatch } from '@legible/context-provider'

const DefaultRules = ({ card }) => {
  const { customer } = useUserState()
  const { setDefaultCard } = useUserDispatch()
  const { session } =  useAuthState()
  const { jwtToken } = session

  const handleSetDefault = () => setDefaultCard(jwtToken, card.id)

  console.log(customer.invoice_settings.default_payment_method)
  console.log(card.id)

  // if(customer.invoice_settings.default_payment_method && customer.invoice_settings.default_payment_method === card.id) {
  if(customer.invoice_settings.default_payment_method === card.id) {
    return <p>is default</p>
  }

  return <button onClick={handleSetDefault}>Set as default</button>
}

const CreditCardInfo = ({ card }) => {
  const { detachCard } = useUserDispatch()
  const { session } =  useAuthState()
  const { jwtToken } = session

  const removeCard = () => detachCard(jwtToken, card.id)

  return (
    <>
      <p>**** **** **** {card.last4}</p>
      <p>{card.exp_month} / {card.exp_year}</p>
      <DefaultRules card={card} />
      <button onClick={removeCard}>Remove</button>
    </>
  )
}

export default CreditCardInfo