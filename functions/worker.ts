import { Hono } from "hono";

const api = new Hono<{ Bindings: Env }>();

api.get("/", async (c) => {
  await c.env.KV_FOR_REPRO.list();
  return c.text("With Hono!");
});

const app = new Hono();
app.route("/api/hono", api);

export default app;
