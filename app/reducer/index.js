import { combineReducers } from "redux";

import users from "./users/users";

const appReducer = combineReducers({
  users
});

export default appReducer;
