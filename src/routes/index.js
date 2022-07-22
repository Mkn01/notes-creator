const { Router } = require("express");

const viewsRouter = require("./views");
const apiRouter = require("./api");

const router = Router();

router.use("/", viewsRouter);
router.use("/api", apiRouter);

module.exports = router;
