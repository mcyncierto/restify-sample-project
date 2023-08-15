import request from "supertest";
import { ApiServer } from "../../src/server/index";

const apiServer = new ApiServer();
const app = apiServer.createServer();

describe("App healthcheck endpoint", () => {
  it("should return a 200 status code", async () => {
    const res = await request(app).get("/healthcheck");
    expect(res.status).toBe(200);
  });
});

describe("DB healthcheck endpoint", () => {
  it("should return a 200 status code", async () => {
    const res = await request(app).get("/healthcheck/db");
    expect(res.status).toBe(200);
  });
});
