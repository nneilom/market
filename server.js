import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("./hacaton_js31/db.json");
const middlewares = defaults({
  static: "./build",
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log("Server Running");
});
