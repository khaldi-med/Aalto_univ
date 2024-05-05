import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  todos: [
    {name: "Write a TODO app (false)"},
    {name: "Show a list of TODOs (true)"},
    {name: "Move TODOs to a database (false)"},
    {name: "Allow marking TODOs done (false)"},
    ],
};

app.get("/", (c) => {
  return c.html(eta.render("index.eta", data));
});

export default app;

