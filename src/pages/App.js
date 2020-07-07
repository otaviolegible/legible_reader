import 'babel-polyfill'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { LegibleTheme } from '@legible/ui-components'
import { AuthProvider, UserProvider, useUserDispatch, useAuthState, useAuthDispatch } from '@legible/context-provider'

import Home from './Home'
import Book from './Book'
import Read from './Read'
import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SearchResults from './SearchResults'
import Profile from './Profile'
import Purchase from './Purchase'
import VerifyEmail from './VerifyEmail'

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
  const {getUser} = useUserDispatch()
  const {getAccessToken} = useAuthDispatch()
  const {session} = useAuthState()

  useEffect(() => {
    if(!session) return
    if(session.jwtToken === '') return
    getUser({jwtToken: session.jwtToken})
  }, [session])

  useEffect(() => {
    if(!session) return
    if(session.jwtToken !== '') return
    getAccessToken()
  }, [session])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/verify'>
          <VerifyEmail />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/book/:id">
          <Book />
        </Route>
        <PrivateRoute path="/purchase/:id">
          <Purchase />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/read/:id">
          <Read />
        </PrivateRoute>
        <PrivateRoute exact path="/read/:id/:location">
          <Read />
        </PrivateRoute>
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
      <AuthProvider config='reader'>
        <UserProvider>
          <Routing />
        </UserProvider>
      </AuthProvider>
    </LegibleTheme>
  )
}

export default App