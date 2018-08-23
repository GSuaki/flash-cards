import {
  STORE_USER
} from '../actions'

const initialState = {}

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case STORE_USER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}