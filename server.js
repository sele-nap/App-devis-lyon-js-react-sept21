const express = require("express");
const next = require("next");
const { delBasePath } = require("next/dist/shared/lib/router/router");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/uploads", express.static(__dirname + "/public/uploads"));

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
setInterval(() => {
  const dateToday = Date.now(dateToday);
  return db.estimate.findMany({
    where: { status: { in: "WAITING_FOR_VALIDATION" } },
  });
  db.estimate.deleteMany;
}, 60000);
