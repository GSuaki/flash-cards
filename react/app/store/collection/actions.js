import { COLLECTION_REQUEST, COLLECTION_RESPONSE } from '../actions'

import CollectionService from '../../services/CollectionService'

export const fetchCollections = () => {
  console.log(`Fetching collections...`)
  return dispatch => CollectionService.fetch()
    .then(payload => {
      dispatch({ type: COLLECTION_RESPONSE, payload })
      return payload
    })
}

export default {
  fetchCollections
}