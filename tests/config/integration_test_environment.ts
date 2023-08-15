const NodeEnvironment = require("jest-environment-node").TestEnvironment;

import { Sequelize } from "sequelize";
import { ApiServer } from "../../src/server/index";

let server: any;
let sequelize: any;
const app = new ApiServer();

class IntegrationTestEnvironment extends NodeEnvironment {
  constructor(config: any, context: any) {
    super(config, context);
  }

  async setup() {
    app.createServer();
    server = app.listen(+process.env.TEST_APP_PORT!);

    sequelize = new Sequelize(
      process.env.TEST_DB_NAME!,
      process.env.TEST_DB_USER!,
      process.env.TEST_DB_PASSWORD,
      {
        host: process.env.TEST_DB_HOST,
        dialect: "mysql",
      }
    );

    await sequelize.authenticate();

    await super.setup();
  }

  async teardown() {
    app.end();
    await sequelize.close();

    await super.teardown();
  }

  runScript(script: any) {
    return super.runScript(script);
  }
}

module.exports = IntegrationTestEnvironment;
