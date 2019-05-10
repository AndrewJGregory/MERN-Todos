import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO,
} from "../actions/todo_actions";

import { RECEIVE_USER_TODOS } from "../actions/user_actions";

export default function todosReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
    case RECEIVE_USER_TODOS:
      return Object.assign({}, state, action.payload.todos);
    case RECEIVE_TODO:
      return Object.assign({}, state, action.todo);
    case REMOVE_TODO:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
