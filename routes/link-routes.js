const router = require("express")();
const { linkController } = require("../controllers");

router.post("/", linkController.createLink);

router.get("/:hash", linkController.getLink);

module.exports = router;
