import { createAction } from '@reduxjs/toolkit';
import { initialState } from './app.state';

const setUser = createAction('SET USER', (users: any) => {
  return {
    payload: {
      users
    }
  }
});

export const userAction = {
  setUser,
}

// export const userReducer = createReducer(initialState, {
//   setUser: (state, action) => {
//     return { ...state, users: action.payload.users }
//   }
// });

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case setUser.type:
      return { ...state, users: action.payload.users }
    default:
      return initialState
  }
}
