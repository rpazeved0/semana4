import { Book } from '../entities/book';
import bookRepository from '../repositories/book.repository';

export function listBooks(): Book[] {
  return bookRepository.listAll();
}
