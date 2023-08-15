import { ApiServer } from "./server/index";
import process from "process";

const server = new ApiServer();

server.createServer();

server.listen(+process.env.APP_PORT! || 3000);
