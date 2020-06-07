import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./users.state";
import { userAction } from "./users.action";

export const userReducer = createReducer(initialState, {
  [userAction.setUser.type]: (state, action) => {
    return { ...state, users: action.payload.users }
  }
});
