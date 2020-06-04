export interface User {
  name: string;
};

export interface UserState {
  users: User[];
};

export const initialState = {
  users: []
};
