import { ajax } from "rxjs/ajax";
import { User } from "../store/users.state";

const API_URL = `http://localhost:20000`;

const getUsers = () => ajax.getJSON<{ data: User[] }>(`${API_URL}/users`);

export const restApi = {
  getUsers
};
