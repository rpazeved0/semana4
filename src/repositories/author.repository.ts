import { Author } from '../entities/author';

const authors: Author[] = [];

function save(author: Author) {
  authors.push(author);
}

function listAll() {
  return authors;
}

function existsWithEmail(email: string): boolean {
  return !authors.some((author) => author.email === email);
}

function findByID(id: string): Author | null {
  return authors.find((author) => author.id === id) ?? null;
}

export default {
  save,
  listAll,
  existsWithEmail,
  findByID,
};
