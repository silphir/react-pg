import { ajax } from "rxjs/ajax";
import { User } from "../store/users.state";

const API_URL = `http://localhost:20000`;

const getUsers = () => ajax.getJSON<{ data: User[] }>(`${API_URL}/users`);
const insertUser = (user: User) => ajax.post(`${API_URL}/users`, user);

export const restApi = {
  getUsers,
  insertUser
};
