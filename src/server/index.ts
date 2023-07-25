import { HttpServer } from "./httpServer";
import { RequestHandler, Server } from "restify";
import * as restify from "restify";
import { ROUTES } from "../routes/index";
import restifySwaggerJsdoc from "restify-swagger-jsdoc";

export class ApiServer implements HttpServer {
  private restify: Server;

  public get(url: string, requestHandler: RequestHandler): void {
    this.addRoute("get", url, requestHandler);
  }

  public post(url: string, requestHandler: RequestHandler): void {
    this.addRoute("post", url, requestHandler);
  }

  public del(url: string, requestHandler: RequestHandler): void {
    this.addRoute("del", url, requestHandler);
  }

  public put(url: string, requestHandler: RequestHandler): void {
    this.addRoute("put", url, requestHandler);
  }

  private addRoute(
    method: "get" | "post" | "put" | "del",
    url: string,
    requestHandler: RequestHandler
  ): void {
    this.restify[method](url, async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (e) {
        console.log(e);
        res.send(500, e);
      }
    });
    console.log(`Added route ${method.toUpperCase()} ${url}`);
  }

  public createServer(): Server {
    this.restify = restify.createServer();
    this.restify.use(restify.plugins.queryParser());
    this.restify.use(restify.plugins.bodyParser());

    this.addRouteIndex();

    restifySwaggerJsdoc.createSwaggerPage({
      title: "TTPR Swagger API documentation",
      version: "v1.0",
      server: this.restify,
      path: "/api-docs",
      apis: ["./src/swaggerDocs/*.ts"],
    });

    return this.restify;
  }

  public listen(port: number): Server {
    this.restify.listen(port, () =>
      console.log(`Server is up & running on port ${port}`)
    );

    return this.restify;
  }

  public end(): void {
    this.restify.close();
  }

  private addRouteIndex(): void {
    ROUTES.forEach((route) => route.initialize(this));
  }
}
