import { reactRouterFastify } from "@mcansh/remix-fastify/react-router";
import type {
  FastifyInstance,
  FastifyRequest,
  RawServerBase,
  RouteGenericInterface,
} from "fastify";
import fp from "fastify-plugin";

declare module "react-router" {
  interface AppLoadContext {
    app: FastifyInstance;
    req: FastifyRequest<RouteGenericInterface, RawServerBase>;
  }
}

export default fp(
  async (app) => {
    app.register(reactRouterFastify, {
      buildDirectory: "./dist/frontend",
      getLoadContext: (req) => {
        return { app, req };
      },
    });
  },
  { name: "reactRouter", dependencies: ["app.env", "app.gracefulShutdown"] },
);
