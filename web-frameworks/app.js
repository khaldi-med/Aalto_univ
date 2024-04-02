import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

// This is route is for the path "/" 
//app.get("/", (c) => c.text("Hello World!"));

//This route is for the path "/secret"
//app.get("/secret", (c) => c.text("Hello Illuminati!"));
  
app.post("/", (c) => c.text("POST request to /"));
//app.get("/", (c) => c.text("GET request to /"));

app.on("peek", "/", (c) => c.text("Nothing to see here."));
export default app;


