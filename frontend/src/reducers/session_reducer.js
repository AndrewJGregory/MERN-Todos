import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from "../actions/session_actions";

const initialState = {
  user: null,
};

export default function sessionReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
