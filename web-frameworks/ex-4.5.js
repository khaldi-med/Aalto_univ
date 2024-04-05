/*
Implement a web application that responds to requests in text format as follows.
-GET /restaurants returns the string "Listing restaurants."
-POST /restaurants returns the string "Adding a restaurant."
-GET /restaurants/:id returns the string "Showing restaurant with id :id.", where :id is a path variable.
-GET /restaurants/:id/reviews returns the string "Listing reviews for restaurant with id :id.", where :id is a path variable.
-POST /restaurants/:id/reviews returns the string "Adding a review for restaurant with id :id.", where :id is a path variable.
-DELETE /restaurants/:id/reviews/:rid returns the string "Removing review :rid from restaurant with id :id.", where :rid and :id are path variables.
*/


import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/restaurants", (c) => c.text("Listing restaurants."));
app.post("/restaurants", (c) => c.text("Adding a restaurant."));

app.get("/restaurants/:id", (c) => {
    const idItem = c.req.param("id")
    return c.text(`Showing restaurant with id ${idItem}.`)
});

app.get("/restaurants/:id/reviews", (c) => {
    const idItem = c.req.param("id")
    //const view = c.req.param("reviews")
    return c.text(`Listing reviews for restaurant with id ${idItem}.`)
});

app.post("/restaurants/:id/reviews", (c) => {
    const idItem = c.req.param("id")
    return c.text(`Adding a review for restaurant with id ${idItem}.`)
});

app.delete("/restaurants/:id/reviews/:rid", (c) => {
    const idItem = c.req.param("id")
    const rmId = c.req.param("rid")
    return c.text(`Removing review ${rmId} from restaurant with id ${idItem}.`)
});

export default app;

