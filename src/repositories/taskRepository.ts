import BaseSequelizeRepository from "./baseSequelizeRepository";

class TaskRepository extends BaseSequelizeRepository {
  constructor(model: any) {
    super(model);
  }
}
export default TaskRepository;
