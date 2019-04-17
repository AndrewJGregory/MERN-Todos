import axios from "axios";

export const fetchTodos = () => axios.get("/api/todos");
