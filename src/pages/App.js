import 'babel-polyfill'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LegibleTheme } from 'legible-ui-components'
import { AuthProvider, UserProvider } from 'legible-context-provider'

import Home from './Home'
import Book from './Book'
import Read from './Read'
import NotFound from './NotFound'
import SearchResults from './SearchResults'
import Subscription from './Subscription'

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
              <Route path="/subscription">
                <Subscription />
              </Route>
              <Route path="/book/:language/:id">
                <Book />
              </Route>
              <Route exact path="/read/:language/:id">
                <Read />
              </Route>
              <Route exact path="/read/:language/:id/:location">
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