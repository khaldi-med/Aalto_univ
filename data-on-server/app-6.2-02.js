import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as visits from "./visits.js";

const app = new Hono();

app.get("/visits", async (c) => {
  let answer = c.text(`Visit count: ${await visits.getVisit()}`);
  return answer;
});

app.get("/", async (c) => {
  await visits.incrementVisit();
  let answer = "Hello world!";

  return await answer;
});

export default app;
