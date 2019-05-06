import * as TodoUtil from "../util/todo_util";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });

const receiveTodo = todo => ({ type: RECEIVE_TODO, todo });

const removeTodo = id => ({ type: REMOVE_TODO, id });

export const fetchTodos = () => dispatch =>
  TodoUtil.fetchTodos().then(({ data }) => dispatch(receiveTodos(data)));

export const editTodo = (id, content) => dispatch =>
  TodoUtil.editTodo(id, content).then(
    res => {
      dispatch(receiveTodo(res.data));
      const editedTodo = Object.values(res.data)[0];
      return editedTodo;
    },
    err => {
      throw err;
    },
  );

export const deleteTodo = id => dispatch =>
  TodoUtil.deleteTodo(id).then(
    () => dispatch(removeTodo(id)),
    err => {
      throw err;
    },
  );
