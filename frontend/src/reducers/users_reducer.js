import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_USER_TODOS } from "../actions/user_actions";

export default function usersReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER_TODOS:
      return Object.assign({}, state, action.payload.user);
    default:
      return state;
  }
}
