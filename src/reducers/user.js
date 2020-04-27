export const initialState = {
  isLoading: false,
  user: {
    id: null,
    displayName: null
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/SET_USER':
      console.log('user/SET_USER')
      return {
        ...state,
        isLoading: true
      }
    case 'user/SET_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.user
      }
    case 'user/SET_USER_ERROR':
      return {
        ...state,
        isLoading: false
      }
    default:
      throw new Error()
  }
}