import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hi there!"));

app.get("/congrats", (c) => c.text(`Congrats, ${c.req.query("heroOfTheDay")}!`));

app.get("/items/:id", (c) => {
    const idItems = c.req.param("id")
    return c.text(`Retrieving item ${idItems}.`)
    
})

app.post("/items", (c) => c.text("Adding an item."))

export default app;

