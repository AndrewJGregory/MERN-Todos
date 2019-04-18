import { createSelector } from "reselect";

const allTodoSelector = ({ todos }) => todos;

const userSelector = ({ users }) => users;

const todoSelector = (_, todo) => todo;

export const todoArrSelector = createSelector(
  allTodoSelector,
  todos => Object.values(todos),
);

export const makeTodoUserSelector = () =>
  createSelector(
    [userSelector, todoSelector],
    (users, todo) => Object.values(users).find(user => user._id === todo.user),
  );