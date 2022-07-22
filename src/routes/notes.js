const { Router } = require("express");

const { getNote, createNotes, getNotes } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.get("/:noteId", getNote);
router.post("/", createNotes);

module.exports = router;
