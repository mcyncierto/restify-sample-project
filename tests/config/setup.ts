import supertest from "supertest";
import { ApiServer } from "../../src/server/index";
import model from "../../src/models";

beforeAll(async () => {
  await model.sequelize.sync({ force: true });
});

afterAll(async () => {});

export default supertest(ApiServer);
