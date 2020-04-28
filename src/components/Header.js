import React, { useEffect } from 'react'
import { Logo, Button } from 'legible-ui-components'
import { useAuthDispatch } from '../contexts/auth'
import { useUserState, useUserDispatch } from '../contexts/user'

const Header = () => {
  const { user, isLoading } = useUserState()
  const { setUser } = useUserDispatch()
  const { signIn, signOut } = useAuthDispatch()
  const idtoken = sessionStorage.getItem('msal.idtoken') || ''

  useEffect(() => {
    console.log('U S E R', user)
    if(idtoken.length > 0 && !isLoading) setUser(idtoken)
  }, [])

  if(isLoading) return null

  if(user.id) {
    return (
      <header>
        <Logo />
        <p>Welcome, {user.displayName}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </header>
    )
  }

  return (
    <header>
      <Logo />
      <Button onClick={() => signIn()}>Sign in</Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </header>
  )
}

export default Header