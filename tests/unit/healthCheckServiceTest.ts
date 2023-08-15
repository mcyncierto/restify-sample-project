import HealthCheckService from "../../src/services/healthCheckService";

jest.mock("../../src/models", () => ({
  sequelize: {
    authenticate: jest.fn(),
  },
}));

describe("healthCheck Service", () => {
  describe("healthCheck function", () => {
    it('should return { status: "ok" }', async () => {
      const result = await HealthCheckService.healthCheck();
      expect(result).toEqual({ status: "ok" });
    });
  });

  describe("healthCheckDb function", () => {
    it('should return { db: "ok" }', async () => {
      const result = await HealthCheckService.healthCheckDb();
      expect(result).toEqual({ db: "ok" });
    });
  });
});
