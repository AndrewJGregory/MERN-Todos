import * as TodoUtil from "../util/todo_util";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });

export const fetchTodos = () => dispatch =>
  TodoUtil.fetchTodos().then(({ data }) => dispatch(receiveTodos(data)));
