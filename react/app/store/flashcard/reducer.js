import { FLASHCARD_RESPONSE } from '../actions'

const initialState = {
  data: []
}

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case FLASHCARD_RESPONSE:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}