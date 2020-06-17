import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BookWrapper = styled(Link)`
  position: relative;
  img {
    display: block;
    height: 300px; 
  }
`
const MonetizationWrapper = styled.div`
  background: lightblue;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
const MonetizationStatus = ({ monetization }) => {
  if(monetization.subscription) return <MonetizationWrapper>subscribers only</MonetizationWrapper>

  return null
}

export const BookPromotion = ({ book }) => {
  return (
    <BookWrapper to={`/book/${book.id}`}>
      <MonetizationStatus monetization={book.monetization} />
      <img src={book.cover.url} />
    </BookWrapper>
  )
}

export default BookPromotion