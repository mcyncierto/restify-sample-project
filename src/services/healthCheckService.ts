import models from "../models";

const { sequelize } = models;

class HealthCheckService {
  static async healthCheck() {
    return { "app status": "ok" };
  }

  static async healthCheckDb() {
    try {
      await sequelize.authenticate();
      return { "db status": "ok" };
    } catch (error) {
      return { "db status": "error" };
    }
  }
}

export default HealthCheckService;
