import { Category } from "./domain/entity/category";
import { CategoryMemory } from "./infra/repositories/category-memory";
import { CategoryService } from "./service/category-service";

(async () => {
  const db = new CategoryMemory();
  const service = new CategoryService(db);
  const cat: Category = {
    id: "asdas",
    name: "Car",
  };

  service.save(cat);

  console.log(await service.findById("asdas"));
})();
