import { Routes } from "./routes";
import { HttpServer } from "../server/httpServer";
import HealthCheckController from "../controllers/healthCheckController";
import { Request, Response } from "restify";

export class HealthCheckRoute implements Routes {
  private endpoint: string = "/healthcheck";

  public initialize(router: HttpServer): void {
    router.get(`${this.endpoint}`, this.healthCheck.bind(this));
    router.get(`${this.endpoint}/db`, this.healthCheckDb.bind(this));
  }

  private async healthCheck(req: Request, res: Response): Promise<void> {
    res.send(await HealthCheckController.healthCheck(req, res));
  }

  private async healthCheckDb(req: Request, res: Response): Promise<void> {
    res.send(await HealthCheckController.healthCheckDb(req, res));
  }
}
