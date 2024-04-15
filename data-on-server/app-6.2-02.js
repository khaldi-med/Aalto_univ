
const app = new Hono();

app.get("/", async (c) => {
    if (await c.req.query("visits")) {
        await visits.incrementVisit();
        await visits.setVisit(c.req.query("visits"));
        c.text(await `Visit count: ${visits.getVisit}`)
  }

  return c.text(await `Store: ${await store.getStore()}`);
});


export default app;
