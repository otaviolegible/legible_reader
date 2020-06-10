import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Cover = styled.img`
  display: block;
  height: 300px;
`

export const BookPromotion = ({ book }) => {
  return (
    <Link to={`/book/${book.language}/${book.id}`}>
      <Cover src={book.cover.url} />
    </Link>
  )
}

export default BookPromotion