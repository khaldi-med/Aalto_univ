import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as visits from "./visits.js"


const app = new Hono();

app.get("/", async (c) => {
    
    let answer = c.text(await visits.getVisit());

    if (await c.req.query("visits")) {
        answer = c.text(`Visit count: ${await visits.getVisit()}`);
    }

    return answer;
});


export default app;


