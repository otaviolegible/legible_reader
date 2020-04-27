import auth from 'react-azure-b2c'

const config = {
  instance: 'https://login.microsoftonline.com/tfp/', 
  clientId: process.env.ADB2C_CLIENT_ID,
  redirectUri: process.env.DNS,
  postLogoutRedirectUri: window.location.origin,
  tenant: 'legibleb2c.onmicrosoft.com',
  signInPolicy: 'B2C_1_legible_signup',
  cacheLocation: 'sessionStorage',
  scopes: [
    'https://legibleb2c.onmicrosoft.com/api/user_impersonation',
    'https://legibleb2c.onmicrosoft.com/api/legible.read',
    'https://legibleb2c.onmicrosoft.com/api/legible.write'
  ]
}

export const initialize = (initialConfig = config) => auth.initialize(initialConfig)

export const signIn = dispatch => auth.run(() => {
  dispatch({ type: 'auth/SET_BEARER_TOKEN' })
  dispatch({ type: 'auth/SET_BEARER_TOKEN_SUCCESS', token: auth.getAccessToken() })
})

export const signOut = () => auth.signOut()

export const getBearerToken = dispatch => dispatch({ type: 'auth/GET_BEARER_TOKEN', token: `Bearer ${auth.getAccessToken()}` })