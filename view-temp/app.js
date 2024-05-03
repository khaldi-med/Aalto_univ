import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

let count = 0;

app.get("/", (c) => {
  count++;
  return c.html(eta.render("index.eta", { count }));
});

Deno.serve(app.fetch);
