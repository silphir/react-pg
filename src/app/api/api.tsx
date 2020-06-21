import { ajax } from "rxjs/ajax";
import { User, UserForm } from "../store/users.state";

const API_URL = `http://localhost:20000`;

const getUsers$ = () => ajax.getJSON<{ data: User[] }>(`${API_URL}/users`);
const insertUser$ = (user: UserForm) => ajax.post(`${API_URL}/users`, user);
const deleteUser$ = (id: string) => ajax.delete(`${API_URL}/users/${id}`);

export const restApi = {
  getUsers$,
  insertUser$,
  deleteUser$
};
