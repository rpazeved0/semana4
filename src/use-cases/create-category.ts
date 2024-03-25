import z from 'zod';
import slugify from 'slugify';

import { Category } from '../entities/category';
import categorysRepository from '../repositories/category.repository';
import { ValidationError } from '../types';

const categorySchema = z.object({
  name: z.string().trim().min(3, 'Por favor, informe o nome do autor'),
});

type CreateCategoryInput = {
  name: string;
};

type CreateCategoryOutput = {
  success: boolean;
  category: Category | null;
  errors: ValidationError[] | null;
};

export function createCategory(
  data: CreateCategoryInput
): CreateCategoryOutput {
  const result = categorySchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      category: null,
      errors: result.error.errors.map((error) => ({
        property: error.path.toString(),
        message: error.message,
      })),
    };
  }

  const newCategory: Category = {
    name: result.data.name,
    slug: slugify(result.data.name, { lower: true }),
  };

  categorysRepository.save(newCategory);

  return {
    success: true,
    category: newCategory,
    errors: null,
  };
}
