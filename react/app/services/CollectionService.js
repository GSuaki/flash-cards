import restClient from './RestClient'

/**
 * Methods
 */
export function fetch() {
  const client = restClient()
  return client({
    method: 'get',
    contentType: "application/json; charset=utf-8",
    url: `/collections`
  })
  .then(resp => resp.data);
}

/**
 * Expose Service
 */
export default {
  fetch
};