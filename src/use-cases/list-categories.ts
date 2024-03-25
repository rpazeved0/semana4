import { Category } from '../entities/category';
import categoryRepository from '../repositories/category.repository';

export function listCategorys(): Category[] {
  return categoryRepository.listAll();
}
