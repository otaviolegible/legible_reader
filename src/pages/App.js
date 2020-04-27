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
import Read from './Read'
import NotFound from './NotFound'
import SearchResults from './SearchResults'

import { AuthProvider } from '../contexts/AuthProvider'
import { UserProvider } from '../contexts/UserProvider'

const App = () => {
  return (
    <LegibleTheme>
      <AuthProvider>
        <UserProvider>
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
              <Route exact path="/read/:id">
                <Read />
              </Route>
              <Route exact path="/read/:id/:location">
                <Read />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserProvider>
      </AuthProvider>
    </LegibleTheme>
  )
}

export default App