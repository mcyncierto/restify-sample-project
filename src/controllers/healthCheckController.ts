import HealthCheckService from "../services/healthCheckService";
import { Request, Response } from "restify";

class HealthCheckController {
  static async healthCheck(req: Request, res: Response) {
    const result = await HealthCheckService.healthCheck();
    return result;
  }

  static async healthCheckDb(req: Request, res: Response) {
    const result = await HealthCheckService.healthCheckDb();
    return result;
  }
}

export default HealthCheckController;
