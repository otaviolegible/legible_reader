import React from 'react'
import { useHistory } from 'react-router-dom'
import { Logo, Button } from 'legible-ui-components'
import { useAuthDispatch, useUserState, useUserDispatch } from 'legible-context-provider'

const Header = () => {
  const { user } = useUserState()
  const { clearUser } = useUserDispatch()
  const { signOut } = useAuthDispatch()
  const history = useHistory()

  const handleSignOut = () => {
    signOut()
    clearUser()
  }

  const handleSignIn = () => history.push('/sign-in')

  if(user.username) {
    return (
      <header>
        <Logo />
        <p>Welcome, {user.attributes.email}</p>
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