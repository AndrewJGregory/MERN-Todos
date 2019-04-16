import { RECEIVE_TODOS } from "../actions/todo_actions";

export default function todosReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, action.payload.todos);
    default:
      return state;
  }
}
