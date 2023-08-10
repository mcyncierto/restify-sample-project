import { Request, Response } from "restify";
import TaskService from "../services/taskService";

class TaskController {
    static async create(req: Request, res: Response) {
        const task = await TaskService.create(req.body);
        return task;
    }
}

export default TaskController;