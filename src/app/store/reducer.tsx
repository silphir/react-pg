import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./users.reducer";

export const reducer = combineReducers({
  userReducer,
});
