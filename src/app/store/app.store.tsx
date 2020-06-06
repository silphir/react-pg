import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./users.action";

export const reducer = combineReducers({
  userReducer,
});
