import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState, User } from './app.state';

const setUser = createAction('SET USER', (users: User[]) => ({ payload: { users } }));

export const userAction = {
  setUser,
}

export const userReducer = createReducer(initialState, {
  [setUser.type]: (state, action) => {
    return { ...state, users: action.payload.users }
  }
});
