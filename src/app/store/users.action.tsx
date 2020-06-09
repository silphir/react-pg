import { createAction } from '@reduxjs/toolkit';
import { User } from './users.state';

const setUser = createAction('SET USER', (users: User[]) => ({ payload: { users } }));

export const userAction = {
  setUser,
};
