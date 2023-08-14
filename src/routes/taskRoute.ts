import { Routes } from "./routes";
import { HttpServer } from "../server/httpServer";
import TaskController from "../controllers/taskController";
import { Request, Response, Next } from "restify";
import { BaseValidator } from "../helpers/validators/baseValidator";
import { z } from "zod";
import { CreateTaskValidator } from "../helpers/validators/task/createTaskValidator";

export class TaskRoute implements Routes {
  private endpoint: string = "/tasks";

  public initialize(router: HttpServer): void {
    router.post(`${this.endpoint}`, this.createTask.bind(this));
  }

  private async createTask(
    req: Request,
    res: Response,
    next: Next
  ): Promise<void> {
    await CreateTaskValidator.validate(req, res, next);

    return await TaskController.create(req, res);
  }
}
