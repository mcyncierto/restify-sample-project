import { HealthCheckRoute } from "./healthCheckRoute";
import { TaskRoute } from "./taskRoute";

export const ROUTES = [new HealthCheckRoute(), new TaskRoute()];
