import restClient from './RestClient'

/**
 * Methods
 */
export function fetch(collectionId) {
  const client = restClient()
  return client({
    method: 'get',
    contentType: "application/json; charset=utf-8",
    url: `/flash-cards?collection_id=${collectionId}`
  })
  .then(resp => resp.data);
}

/**
 * Expose Service
 */
export default {
  fetch
};