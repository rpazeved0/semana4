import { Author } from '../entities/author';
import authorRepository from '../repositories/author.repository';

export function listAuthors(): Author[] {
  return authorRepository.listAll();
}
