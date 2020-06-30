import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container } from '@legible/ui-components'

import { Footer, Header, SearchBar, BooksResults } from '../components'

import { searchResults } from '../intl'

const SearchResults = () => {
  return (
    <IntlProvider locale="en" messages={searchResults}>
      <Header />
      <Container>
        <SearchBar />
        <BooksResults />
      </Container>
      <Footer />
    </IntlProvider>
  )
}

export default SearchResults