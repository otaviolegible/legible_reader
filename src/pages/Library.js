import React from 'react'
import { Link } from 'react-router-dom'
import { Container, P } from '@legible/ui-components'

import { Footer, Header } from '../components'

const Library = () => {
  // const library = []
  const library = [
    {
      id: '1592698541539471',
      cover: 'https://storageaccountlegiba631.blob.core.windows.net/cover/1592698541539471.jpg',
      title: 'Book 1',
      progress: ''
    }
  ]

  if(library.length === 0) {
    return (
      <>
      <Header />
        <Container margin='7rem auto 12rem'>
          <P>Your library is empty, go fill it with books</P>
        </Container>
      <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Container margin='7rem auto 12rem'>
        {library.map(item => (
          <Link to={`/book/${item.id}`}>
            <img width="100" src={item.cover} />
            <h2>{item.title}</h2>
          </Link>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default Library