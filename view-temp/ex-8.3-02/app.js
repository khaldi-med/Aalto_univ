import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  object: "gravity",
  value: 0,
};

app.get("/", (c) => {
  if (c.req.query("object")) {
    data.object = c.req.query("object");
  }

  if (c.req.query("value")) {
    data.value = Number(c.req.query("value"));
  }

  return c.html(eta.render("index.eta", data));
});

export default app;

