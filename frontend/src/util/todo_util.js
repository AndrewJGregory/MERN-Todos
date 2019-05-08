import axios from "axios";

export const fetchTodos = () => axios.get("/api/todos");

export const editTodo = (id, todo) => axios.patch(`/api/todos/${id}`, { todo });

export const deleteTodo = id => axios.delete(`/api/todos/${id}`);
