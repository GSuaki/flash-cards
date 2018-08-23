import { FORGOT_PASSWORD, AUTHENTICATED, AUTHENTICATION_FAILED, STORE_USER } from '../actions'

import UserService from '../../services/UserService'

export const AUTH_TOKEN = 'x-auth-token'

export const forgotPassword = email => {
  console.log(`Sending recover email to ${email}`)
  return dispatch => UserService.forgoPassword(email)
    .then(res => {
      dispatch({ type: FORGOT_PASSWORD, payload: res })
    })
}

export const login = credentials => {
  console.log(`Performing login with credentials ${ JSON.stringify(credentials) }`)
  return dispatch => UserService.doLogin(credentials)
    .then(res => {
      const { data: payload, headers } = res

      dispatch({ type: AUTHENTICATED })
      dispatch({ type: STORE_USER, payload })

      localStorage.setItem(AUTH_TOKEN, headers.authorization);

      return payload
    })
    .catch(err => {
      dispatch({ type: AUTHENTICATION_FAILED, payload: 'E-mail ou senha inválidos' })
      throw err
    })
}

export const logout = () => {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}

export const createAccount = data => {
  console.log(`Creating account ${ JSON.stringify(data) }`)
  return dispatch => UserService.createUser(data)
    .then(() => login({ login: data.login, pwd: data.password })(dispatch))
}

export default {
  createAccount,
  forgotPassword,
  login
}