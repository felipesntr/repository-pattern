import { Category } from "../domain/entity/category";
import { CategoryRepository } from "../domain/repository/category-interface";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  findById = async (id: string) => {
    return this.categoryRepository.findById(id);
  };
  save = async (category: Category) => {
    return this.categoryRepository.save(category);
  };
}
