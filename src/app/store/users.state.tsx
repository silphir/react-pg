import { createSelector } from "@reduxjs/toolkit";

export interface User {
  name: string;
}

export interface UserState {
  users: User[];
}

export const initialState = {
  users: []
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectUserReducerState = (state: any) => state.userReducer;
export const selectUser = createSelector(
  selectUserReducerState,
  (state: UserState) => state.users
);