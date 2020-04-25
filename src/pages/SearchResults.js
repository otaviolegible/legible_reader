import React from 'react'
import { IntlProvider } from 'react-intl'
import { Container } from 'legible-ui-components'

import { SearchBar, BooksResults } from '../components'

import { searchResults } from '../intl'

const SearchResults = () => {
  return (
    <IntlProvider locale="en" messages={searchResults}>
      <Container>
        <SearchBar />
        <BooksResults />
      </Container>
    </IntlProvider>
  )
}

export default SearchResults