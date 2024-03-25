import { User } from '../entities/user';

const users: User[] = [];

function save(user: User) {
  users.push(user);
}

function listAll() {
  return users;
}

export default {
  save,
  listAll,
};
