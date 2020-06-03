import React, { useEffect } from 'react'
import { Logo, Button } from 'legible-ui-components'
import { useAuthState, useAuthDispatch, useUserState, useUserDispatch } from 'legible-context-provider'

const Header = () => {
  const { user, isLoading } = useUserState()
  const { getUser, clearUser } = useUserDispatch()
  const { session } = useAuthState()
  const { signIn, signOut, getAccessToken } = useAuthDispatch()

  const handleSignIn = () => signIn()

  const handleSignOut = () => {
    signOut()
    clearUser()
  }

  useEffect(() => {
    if(session.jwtToken === '') return
    getUser()
  }, [session])

  useEffect(() => {
    if(session.jwtToken !== '') return
    getAccessToken()
  }, [session])

  if(isLoading) return null

  if(user.username) {
    return (
      <header>
        <Logo />
        <p>Welcome, {user.username}</p>
        <Button onClick={handleSignOut}>Sign out</Button>
      </header>
    )
  }

  return (
    <header>
      <Logo />
      <Button onClick={handleSignIn}>Sign in</Button>
    </header>
  )
}

export default Header