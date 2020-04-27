import React, { useEffect, createContext, useContext, useReducer } from 'react'
import { reducer, initialState } from '../reducers/auth'
import { initialize, signIn, signOut, getBearerToken } from '../actions/auth'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const useAuthState = () => useContext(AuthStateContext)
const useAuthDispatch = () => useContext(AuthDispatchContext)

const AuthProvider = ({ children, authState = initialState }) => {
  const [ state, dispatcher ] = useReducer(reducer, authState)

  const dispatch = {
    initialize: () => initialize(dispatcher),
    signIn: () => signIn(dispatcher),
    getBearerToken: () => getBearerToken(dispatcher),
    signOut: () => signOut()
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export {
  AuthProvider,
  useAuthDispatch,
  useAuthState
}