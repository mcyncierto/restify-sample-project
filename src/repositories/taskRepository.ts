import { BaseSequelizeRepository } from "./baseSequelizeRepository";

export class TaskRepository extends BaseSequelizeRepository {
  constructor(model: any) {
    super(model);
  }
}
