import { Request, Response } from "restify";
import TaskService from "../services/taskService";
import { TaskTransformer } from "../helpers/transformers/taskTransformer";

class TaskController {
  /**
   * Creates a new task.
   *
   * @param {Request} req - The Restify request object.
   * @param {Response} res - The Restify response object.
   * @returns {Promise<void>} A Promise that resolves when the task is created.
   */
  static async create(req: Request, res: Response): Promise<void> {
    const task = await TaskService.create(req.body);
    const data = TaskTransformer.resource(task, false, ["id"]);

    res.send(201, data);
  }
}

export default TaskController;
