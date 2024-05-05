import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  emperors: [{
    name: "Augustus",
    yearOfBirth: -63,
  }, {
    name: "Tiberius",
    yearOfBirth: -42,
  }, {
    name: "Caligula",
    yearOfBirth: 12,
  }, {
    name: "Claudius",
    yearOfBirth: -10,
  }, {
    name: "Nero",
    yearOfBirth: 37,
  }],
};

app.get("/", (c) => {
  return c.html(eta.render("index.eta", data));
});

export default app;

