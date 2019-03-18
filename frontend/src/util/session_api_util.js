import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signup = user => axios.post("/api/users/signup", user);
export const signin = user => axios.post("/api/users/signin", user);
