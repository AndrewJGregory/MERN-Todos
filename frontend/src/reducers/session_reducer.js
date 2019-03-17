import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function sessionReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
