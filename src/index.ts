import { ApiServer } from "./server/index";
import process from "process";

const server = new ApiServer();

server.createServer();
// server.middlewares();
server.listen(+process.env.APP_PORT! || 3000);
