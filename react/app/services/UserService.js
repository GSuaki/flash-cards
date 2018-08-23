import restClient from './RestClient'

export function doLogin(data) {
  return restClient()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: `/auth`,
    data
  })
}

export function createUser(data) {
  return restClient()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: `/users`,
    data
  })
  .then(resp => resp.data);
}

export function forgoPassword(email) {
  return restClient()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: `/forgot-password`,
    data: {
      email
    }
  })
  .then(resp => resp.data);
}

/**
 * Expose Service
 */
export default {
  createUser,
  doLogin,
  forgoPassword
};