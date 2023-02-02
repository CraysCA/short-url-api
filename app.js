const express = require("express");
const app = express();
const { serverSettings } = require("./config");
const routes = require("./routes");

require("./db/models");

app.use(express.json());
app.use(routes);

app.listen(serverSettings.port, () => {
  console.info(`server up on port: ${serverSettings.port}`);
});
