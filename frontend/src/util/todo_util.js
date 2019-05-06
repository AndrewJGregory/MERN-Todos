import axios from "axios";

export const fetchTodos = () => axios.get("/api/todos");

export const editTodo = (id, content) =>
  axios.patch(`/api/todos/${id}`, { content });

export const deleteTodo = id => axios.delete(`/api/todos/${id}`);
