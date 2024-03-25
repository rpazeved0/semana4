import { Category } from '../entities/category';

const categories: Category[] = [];

function save(category: Category) {
  categories.push(category);
}

function listAll(): Category[] {
  return categories;
}

function findBySlug(slug: string): Category | null {
  return categories.find((category) => category.slug === slug) ?? null;
}

export default {
  save,
  listAll,
  findBySlug,
};
