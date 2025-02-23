import "dotenv-safe/config.js";

import { makeApp } from "./makeApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.PORT ?? "4000");

const app = makeApp();

app.listen(
  {
    host: HOST,
    port: PORT,
  },
  (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    app.log.info({}, `Server is running http://localhost:${PORT}`);
  },
);
