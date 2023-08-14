import { Request, Response } from "restify";
import TaskService from "../services/taskService";
import { TaskTransformer } from "../helpers/transformers/taskTransformer";

class TaskController {
  static async create(req: Request, res: Response): Promise<void> {
    const task = await TaskService.create(req.body);
    const data = TaskTransformer.resource(task, false, ["id"]);

    res.send(201, data);
  }
}

export default TaskController;
