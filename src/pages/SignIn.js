import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, GridContainer, GridItem, InputText, Button } from '@legible/ui-components'
import { useAuthDispatch, useUserState } from '@legible/context-provider'
import SignInModal from '../components/SignInModal'
import SignUpModal from '../components/SignUpModal'

const SignIn = () => {
  const { signIn, signUp } = useAuthDispatch()
  const { user } = useUserState()
  const history = useHistory()

  const handleSignIn = ({email, password}) => signIn(email, password)

  const handleSignUp = ({email, password}) => signUp(email, password)

  useEffect(() => {
    if(!user.username) return
    history.goBack()
  }, [user])

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
