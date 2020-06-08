import React from 'react'
import styled from 'styled-components'

const Cover = styled.img`
  height: 300px;
`

export const BookPromotion = ({ book }) => {
  return (
    <>
      <Cover src={book.cover} />
    </>
  )
}

export default BookPromotion