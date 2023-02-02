const router = require("express").Router();
const LinkRoute = require("./link-routes");

router.use("/link", LinkRoute);

module.exports = router;
