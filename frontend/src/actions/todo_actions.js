import * as TodoUtil from "../util/todo_util";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });

const receiveTodo = todo => ({ type: RECEIVE_TODO, todo });

export const fetchTodos = () => dispatch =>
  TodoUtil.fetchTodos().then(({ data }) => dispatch(receiveTodos(data)));

export const editTodo = (id, content) => dispatch =>
  TodoUtil.editTodo(id, content).then(({ data }) => {
    dispatch(receiveTodo(data));
    const editedTodo = Object.values(data)[0];
    return editedTodo;
  });
