import { FEEDBACK_FAILED, FEEDBACK_SUCCESS } from '../actions'

const initialState = {
  isSideBarOpen: false
}

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case FEEDBACK_SUCCESS:
      return {
        ...state,
        ...payload,
        type: 'SUCCESS'
      };
    case FEEDBACK_FAILED:
      return {
        ...state,
        ...payload,
        type: 'FAILED'
      }
    default:
      return state;
  }
}