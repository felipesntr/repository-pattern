import { Category } from "../../domain/entity/category";
import { CategoryRepository } from "../../domain/repository/category-interface";

class CategoriesMemoryDb {
  categories: Category[] = [];
}

export class CategoryMemory implements CategoryRepository {
  db: CategoriesMemoryDb;

  constructor() {
    this.db = new CategoriesMemoryDb();
  }

  findById = async (catId: string): Promise<Category> => {
    try {
      const res = this.db.categories.filter(
        (cat: Category) => cat.id === catId
      );
      return Promise.resolve(res[0]);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  save = (category: Category): Promise<Category> => {
    this.db.categories.push(category);
    return Promise.resolve(category);
  };
}
