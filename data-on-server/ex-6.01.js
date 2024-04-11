const app = new Hono();

let count = 3;

app.get("/", (c) => {
  if (count === 0) {
    return c.text("Kaboom!");
  } else {
    let frech = c.text(count);

    count--;
    return frech;
  }
});

