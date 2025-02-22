import path from "node:path";

import FastifyAutoload from "@fastify/autoload";
import fastify from "fastify";

export function makeApp() {
  const app = fastify({
    logger: true,
  });

  app.register(FastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  return app;
}
