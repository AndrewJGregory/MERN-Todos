import * as UserUtil from "../util/user_util";

export const RECEIVE_USER_TODOS = "RECEIVE_USER_TODOS";

const receiveUserTodos = payload => ({ type: RECEIVE_USER_TODOS, payload });

export const fetchUserTodos = username => dispatch =>
  UserUtil.fetchUserTodos(username).then(({ data: payload }) =>
    dispatch(receiveUserTodos(payload)),
  );
