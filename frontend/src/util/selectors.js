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

export const currentUserSelector = createSelector(
  ({ session: { user } }) => user,
  currentUser => currentUser,
);

export const editingTodoSelector = createSelector(
  ({ ui: { editingTodo } }) => editingTodo,
  editingTodo => editingTodo,
);

export const isModalOpenSelector = createSelector(
  ({ ui: { isModalOpen } }) => isModalOpen,
  isModalOpen => isModalOpen,
);

export const getUserByUsername = createSelector(
  [userSelector, (_, username) => username],
  (users, username) =>
    Object.values(users).find(user => user.username === username),
);

export const getUserTodos = createSelector(
  [allTodoSelector, (_, userId) => userId],
  (todos, userId) => Object.values(todos).filter(todo => userId === todo.user),
);
