import { Routes } from "./routes";
import { HttpServer } from "../server/httpServer";
import TaskController from "../controllers/taskController";
import { Request, Response } from "restify";

export class TaskRoute implements Routes {
  private endpoint: string = "/tasks";

  public initialize(router: HttpServer): void {
    router.post(`${this.endpoint}`, this.createTask.bind(this));
  }

  private async createTask(req: Request, res: Response): Promise<void> {
    return await TaskController.create(req, res);
  }
}
