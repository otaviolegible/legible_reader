import 'babel-polyfill'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { LegibleTheme } from 'legible-ui-components'
import { AuthProvider, UserProvider, useUserDispatch, useAuthState, useAuthDispatch } from 'legible-context-provider'

import Home from './Home'
import Book from './Book'
import Read from './Read'
import NotFound from './NotFound'
import SignIn from './SignIn'
import SearchResults from './SearchResults'
import Subscription from './Subscription'

const PrivateRoute = ({ children, ...rest }) => {
  const { session } = useAuthState()
  const history = useHistory();

  useEffect(() => {
    if(session) return
    history.push('/sign-in')
  }, [session])

  if(!session || session.jwtToken === '') return null

  return (
    <Route {...rest}>
      {children}
    </Route>
  )
}

const Routing = () => {
  const { getUser } = useUserDispatch()
  const { session } = useAuthState()
  const { getAccessToken } = useAuthDispatch()

  useEffect(() => {
    if(session && session.jwtToken === '') return
    getUser()
  }, [session])

  useEffect(() => {
    if(session && session.jwtToken !== '') return
    getAccessToken()
  }, [session])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/sign-in">
          <SignIn />
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
  )
}

const App = () => {
  return (
    <LegibleTheme>
      <AuthProvider>
        <UserProvider>
          <Routing />
        </UserProvider>
      </AuthProvider>
    </LegibleTheme>
  )
}

export default App