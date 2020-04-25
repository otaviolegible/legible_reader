import 'babel-polyfill'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { LegibleTheme } from 'legible-ui-components'

import Home from './Home'
import Book from './Book'
import SearchResults from './SearchResults'

const App = () => {
  return (
    <LegibleTheme>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/book/:id">
            <Book />
          </Route>
        </Switch>
      </Router>
    </LegibleTheme>
  )
}

export default App