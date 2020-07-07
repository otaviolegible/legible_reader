import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { LogoMain as Logo, Button,  Container, FlexBox, Nav } from '@legible/ui-components'
import { useAuthDispatch, useUserState, useUserDispatch } from '@legible/context-provider'

const Link = ({ children, to }) => <NavLink to={to} activeClassName='selected'>{children}</NavLink>

const HeaderWrapper = ({ children, logoOnly }) => {
  if(logoOnly) return (
    <Container header as='header'>
      <Container fluid>
        <FlexBox align='center' justify='center'>
          <Link to='/' aria-label='Back to homepage'><Logo /></Link>
        </FlexBox>
      </Container>
    </Container>
  )

  return (
    <Container header as='header'>
      <Container fluid>
        <FlexBox align='center' justify='space-between'>
          <Link to='/' aria-label='Back to homepage'><Logo /></Link>
            {children}
        </FlexBox>
      </Container>
    </Container>
  )
}

const Header = ({ logoOnly = false }) => {
  const { username } = useUserState()
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
      <HeaderWrapper>
        <Nav>
          <Link to='/browse'>Browse</Link>
          <Link to='/premium'>Premium</Link>
          <Button type='secondary' appearance='outline' size='small' onClick={handleSignOut}>Sign out</Button>
        </Nav>
      </HeaderWrapper>
    )
  }

  return (
    <HeaderWrapper logoOnly={logoOnly}>
      <Nav>
        <Link to='/browse'>Browse</Link>
        <Link to='/premium'>Premium</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <Button type='secondary' appearance='outline' size='small' onClick={handleSignIn}>Log In</Button>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header