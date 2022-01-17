import { Category } from "../entity/category";

export interface CategoryRepository {
  findById: (id: string) => Promise<Category>;
  save: (category: Category) => Promise<Category>;
}
