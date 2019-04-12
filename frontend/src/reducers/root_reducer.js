import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import todos from "./todos_reducer.js";

const rootReducer = combineReducers({ session, errors, todos });

export default rootReducer;
