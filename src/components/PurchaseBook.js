import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@legible/ui-components'
import { useAuthState, useUserDispatch, useUserState } from '@legible/context-provider'

const BookPurchase = ({ book }) => {
  const { purchaseBook } = useUserDispatch()
  const { customer, purchases } = useUserState()
  const { session } = useAuthState()
  const { jwtToken } = session
  const history = useHistory()
  const price = { amount: book.pricing.sale || book.pricing.list, currency: 'cad' }
  const buyer = { id: customer.id, book: book.id }

  const handlePurchase = async () => {
    await purchaseBook(jwtToken, price, buyer)
  }

  // useEffect(() => {
  //   if(purchases.find(purchase => purchase.id === book.id)) history.push(`/read/${book.id}`)
  // }, [])

  return (
    <>
      <h2>You're purchasing the ebook: {book.title}</h2>
      <img width='200px' src={book.cover && book.cover.url} />
      <div>
        <p>price: {book.pricing.list}</p>
        {book.pricing.taxes.details.map((tax, i) => (
          <p key={i}>{tax.type}: {tax.amount}</p>
        ))}
        <p>Total: {book.pricing.taxes.total}</p>
        <Button disabled={false} onClick={handlePurchase}>Purchase Book</Button>
      </div>
    </>
  )
}

export default BookPurchase
