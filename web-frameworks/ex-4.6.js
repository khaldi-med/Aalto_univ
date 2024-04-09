import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hi there!"));
app.get("/congrats", (c) => c.text("Congrats, {heroOfTheDay}!"));
app.on("cat", "/secrets", (c) => c.text("Meow!"));
app.on("whats", "/up", (c) => c.text("A movie!"));


export default app;
