const { Router } = require("express");

const { getNote, createNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNote);
router.post("/", createNote);

module.exports = router;
