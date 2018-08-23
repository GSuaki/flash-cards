import { COLLECTION_RESPONSE } from '../actions'

const initialState = {
  data: []
}

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case COLLECTION_RESPONSE:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}