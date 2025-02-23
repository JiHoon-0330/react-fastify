import { reactRouterFastify } from "@mcansh/remix-fastify/react-router";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    app.register(reactRouterFastify, {});
  },
  { name: "reactRouter", dependencies: ["app.env", "app.gracefulShutdown"] },
);
