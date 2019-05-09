import axios from "axios";

export const fetchUserTodos = username => axios.get(`/api/users/${username}`);
