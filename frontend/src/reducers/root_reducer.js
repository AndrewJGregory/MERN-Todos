import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import todos from "./todos_reducer";
import users from "./users_reducer";

const rootReducer = combineReducers({ session, errors, todos, users });

export default rootReducer;
