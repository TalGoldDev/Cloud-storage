import { combineReducers } from "redux";

import userReducer from "./user";

const rootReducer = combineReducers({
  recipes: userReducer,
});

export default rootReducer;
