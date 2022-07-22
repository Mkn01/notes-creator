const { Router } = require("express");
const { renderLandingPage, renderNotesPage } = require("../controllers/views");

const router = Router();

router.get("/notes", renderNotesPage);
router.get("/", renderLandingPage);

module.exports = router;
