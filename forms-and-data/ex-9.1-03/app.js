import {
  Eta
} from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import {
  Hono
} from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({
  views: `${Deno.cwd()}/templates/`
});

const app = new Hono();

app.get("/", (c) => {
  return c.html(eta.render("index.eta"));
});
app.post("/", async (c) => {
      const body = await c.req.parseBody();
      let result = `${body.name} lives at ${body.address}.`
      return c.text(result);
});

Deno.serve(app.fetch);

