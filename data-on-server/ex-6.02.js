import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as store from "./store.js"

const app = new Hono();


app.get("/", (c) => {
    const isEmpty = c.req.query("store")
    if(isEmpty){
        store.setStore(isEmpty)
    }

    return c.text(`Store: ${store.getStore()}`)
    
});


export default app;

