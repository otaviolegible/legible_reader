import React, { createContext, useContext, useReducer } from 'react'
import auth from 'react-azure-b2c'
import { reducer, initialState } from './reducer'
import * as actions from './actions'

const isStateLoginSessionStorage = () => sessionStorage.getItem('msal.state.login') !== ''

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)

export const AuthProvider = ({ children, authState = initialState }) => {
  const [ state, dispatcher ] = useReducer(reducer, authState)

  const dispatch = {
    initialize: () => actions.initialize(dispatcher),
    signIn: () => actions.signIn(dispatcher),
    signOut: () => actions.signOut(),
    getBearerToken: () => actions.getBearerToken(dispatcher)
  }

  // useEffect(() => {
  //   const isSignedIn = isStateLoginSessionStorage()
  //   const { signIn } = dispatch
  //   const { access_token  } = state

  //   actions.initialize()
  //   // if(isSignedIn && !access_token) signIn(dispatch)
  // }, [dispatch, state])

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
