import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

export default function todosReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, action.payload.todos);
    case RECEIVE_TODO:
      return Object.assign({}, state, action.todo);
    default:
      return state;
  }
}
