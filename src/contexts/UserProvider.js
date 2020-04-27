import React, { createContext, useContext, useReducer } from 'react'
import { reducer, initialState } from '../reducers/user'
import { setUser } from '../actions/user'

const UserStateContext = createContext()
const UserDispatchContext = createContext()

export const useUserState = () => useContext(UserStateContext)
export const useUserDispatch = () => useContext(UserDispatchContext)

export const UserProvider = ({ children, userState = initialState }) => {
  const [ state, dispatcher ] = useReducer(reducer, userState)

  const dispatch = {
    setUser: (token) => setUser(dispatcher, token)
  }

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}
