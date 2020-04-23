import 'babel-polyfill'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { LegibleTheme } from 'legible-ui-components'

import Home from './Home'
import SearchResults from './SearchResults'

const App = () => {
  return (
    <LegibleTheme>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
      </Router>
    </LegibleTheme>
  )
}

export default App