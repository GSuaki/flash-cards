import { AUTHENTICATED, AUTHENTICATION_FAILED, UNAUTHENTICATED } from '../actions'

const initialState = {
  authenticated: false
}

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case AUTHENTICATION_FAILED:
      return {
        ...state,
        authenticated: false
      }
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      }
    default:
      return state;
  }
}