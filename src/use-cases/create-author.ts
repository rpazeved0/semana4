import z from 'zod';
import { randomUUID } from 'node:crypto';

import { Author } from '../entities/author';
import authorsRepository from '../repositories/author.repository';
import { ValidationError } from '../types';

const authorSchema = z.object({
  name: z.string().trim().min(3, 'Por favor, informe o nome do autor'),
  email: z
    .string()
    .email('Por favor, informe um e-mail válido')
    .refine((email) => authorsRepository.existsWithEmail(email), {
      message: 'Já existe autor cadastrado com o e-mail informado',
    }),
  bio: z.string().min(10).max(500),
});

type CreateAuthorInput = {
  name: string;
  email: string;
  bio: string;
};

type CreateAuthorOutput = {
  success: boolean;
  author: Author | null;
  errors: ValidationError[] | null;
};

export function createAuthor(data: CreateAuthorInput): CreateAuthorOutput {
  const result = authorSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      author: null,
      errors: result.error.errors.map((error) => ({
        property: error.path.toString(),
        message: error.message,
      })),
    };
  }

  const newAuthor: Author = {
    ...result.data,
    id: randomUUID(),
    createdAt: new Date(),
  };

  authorsRepository.save(newAuthor);

  return {
    success: true,
    author: newAuthor,
    errors: null,
  };
}
