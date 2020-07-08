import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, GridContainer, GridItem, InputText, Button } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'
import SignInModal from '../components/SignInModal'
import SignUpModal from '../components/SignUpModal'

const SignIn = () => {
  const { signIn, signUp } = useAuthDispatch()
  const { username } = useUserState()
  const history = useHistory()
  const { search } = useLocation()
  const params = new URLSearchParams(search);

  const handleSignIn = ({email, password}) => signIn(email, password)

  const handleSignUp = ({email, password}) => signUp(email, password)

  useEffect(() => {
    if(username) {
      if(params.has('ref')) return history.push(params.get('ref'))
      history.push('/')
    }
  }, [username])

  return (
    <Container>
      <GridContainer>
        <GridItem column='3 / 9'>
          <SignInModal handleSignIn={handleSignIn} />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem column='3 / 9'>
          <SignUpModal handleSignUp={handleSignUp} />
        </GridItem>
      </GridContainer>
    </Container>
  )
}
export default SignIn
