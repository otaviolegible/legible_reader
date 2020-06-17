import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LogoMain as Logo, Button } from '@legible/ui-components'
import { useAuthDispatch, useUserState, useUserDispatch } from '@legible/context-provider'

const Header = () => {
  const { email, username } = useUserState()
  const { clearUser } = useUserDispatch()
  const { signOut } = useAuthDispatch()
  const history = useHistory()

  const handleSignOut = () => {
    signOut()
    clearUser()
  }

  const handleSignIn = () => history.push('/sign-in')

  if(username) {
    return (
      <header>
        <Link to='/'><Logo /></Link>
        <p>Welcome, <Link to='/profile'>{email}</Link></p>
        <Button onClick={handleSignOut}>Sign out</Button>
      </header>
    )
  }

  return (
    <header>
      <Link to='/'><Logo /></Link>
      <Button onClick={handleSignIn}>Sign in</Button>
    </header>
  )
}

export default Header