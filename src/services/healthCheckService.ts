import models from "../models";

const { sequelize } = models;

class HealthCheckService {
  static async healthCheck() {
    return { status: "ok" };
  }

  static async healthCheckDb() {
    try {
      await sequelize.authenticate();
      return { db: "ok" };
    } catch (error) {
      return { db: "error" };
    }
  }
}

export default HealthCheckService;
