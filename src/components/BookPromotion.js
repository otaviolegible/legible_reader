import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, FlexBox, H4, P } from '@legible/ui-components'

const MonetizationWrapper = styled.div`
  background: lightblue;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 1rem;
`
const MonetizationStatus = ({ monetization }) => {
  if(monetization.subscription) return <MonetizationWrapper>subscribers only</MonetizationWrapper>

  return null
}

const BookTitle = ({ title }) => {
  if(title.length > 85) return <H4>{title.slice(0, 85)}...</H4>

  return (
    <H4>{title}</H4>
  )
}

export const BookPromotion = ({ book }) => {
  return (
    <li>
      {/* <MonetizationStatus monetization={book.monetization} /> */}
      <Link to={`/book/${book.id}`}>
        <figure>
          <img src={book.cover.url} alt='Book Cover' />
        </figure>
      </Link>
      <BookTitle title={book.title} />
      <P>by {book.creators.toString()}</P>
      <FlexBox>
        <Button as={Link} to={`/read/${book.id}`} type='icon' icon='ebook' aria-label='Read book now' />
        <Button type='icon' icon='libraryadd' aria-label='Add book to library' />
      </FlexBox>
    </li>
  )
}

export default BookPromotion