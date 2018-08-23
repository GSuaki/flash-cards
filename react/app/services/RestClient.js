import axios from 'axios'
import environment from '../../config/config'

const isAuthenticated = () => {
  return localStorage.getItem('x-auth-token') != null
}

const getAuthorizationHeader = () => {
  return {
    Authorization: localStorage.getItem('x-auth-token')
  }
}

const getHeaders = () => {
  return {
    headers: {
      ...(isAuthenticated() ? getAuthorizationHeader() : {})
    }
  }
}

export default () => axios.create({
  baseURL: environment.API_URL,
  ...(getHeaders())
})