import { Author } from './author';
import { Category } from './category';

export type Book = {
  title: string;
  except: string;
  summary: string;
  price: number;
  pages: number;
  isbn: string;
  publicationDate: Date;
  category: Category;
  author: Author;
};
