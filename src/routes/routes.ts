import { HttpServer } from "../server/httpServer";

export interface Routes {
  initialize(httpServer: HttpServer): void;
}
