import { z } from 'zod';
import { Book } from '../entities/book';

import authorRepository from '../repositories/author.repository';
import bookRepository from '../repositories/book.repository';
import { ValidationError } from '../types';
import categoryRepository from '../repositories/category.repository';

type CreateBookInput = {
  title: string;
  except: string;
  summary: string;
  price: number;
  pages: number;
  isbn: string;
  publicationDate: Date;
  categorySlug: string;
  authorId: string;
};

type CreateBookOutput = {
  success: boolean;
  book: Book | null;
  errors: ValidationError[] | null;
};

const bookSchema = z.object({
  title: z.string().trim().min(3),
  except: z.string().trim().min(100).max(500),
  summary: z.string().trim().min(100),
  price: z.number().positive(),
  pages: z.number().positive(),
  isbn: z.string().trim(),
  publicationDate: z.date().min(new Date()),
  categorySlug: z
    .string()
    .trim()
    .refine((slug) => categoryRepository.findBySlug(slug), {
      message: 'Category not found',
    }),
  authorId: z
    .string()
    .trim()
    .uuid()
    .refine((id) => authorRepository.findByID(id), {
      message: 'Author not found',
    }),
});

export function createBook(data: CreateBookInput): CreateBookOutput {
  const result = bookSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      book: null,
      errors: result.error.errors.map((error) => ({
        property: error.path.toString(),
        message: error.message,
      })),
    };
  }

  const { authorId, categorySlug, ...restBook } = result.data;
  const author = authorRepository.findByID(authorId)!;
  const category = categoryRepository.findBySlug(categorySlug)!;

  const book: Book = {
    ...restBook,
    author,
    category,
  };

  bookRepository.save(book);

  return {
    success: true,
    errors: null,
    book,
  };
}
