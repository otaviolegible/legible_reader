import { fetchUser } from '../services/fetchUser'

export const setUser = async (dispatch, token) => {
  console.log('user/SET_USER', token)
  const user = await fetchUser({ token })
  dispatch({ type: 'user/SET_USER_SUCCESS', user })
}
