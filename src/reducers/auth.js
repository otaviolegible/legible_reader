export const initialState = {
  isLoading: false,
  access_token: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/SET_BEARER_TOKEN':
      return {
        ...state,
        isLoading: true
      }
    case 'auth/GET_BEARER_TOKEN':
      return {
        ...state,
        access_token: action.token
      }
    case 'auth/SET_BEARER_TOKEN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        access_token: action.token
      }
    case 'auth/SIGN_OUT':
      return {
        ...state,
        access_token: ''
      }
    default:
      throw new Error()
  }
}