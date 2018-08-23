import { FLASHCARD_RESPONSE } from '../actions'

import FlashCardService from '../../services/FlashCardService'

export const fetchCards = (collectionId) => {
  console.log(`Fetching flash-cards...`)
  return dispatch => FlashCardService.fetch(collectionId)
    .then(payload => {
      dispatch({ type: FLASHCARD_RESPONSE, payload })
      return payload
    })
}

export default {
  fetchCards
}