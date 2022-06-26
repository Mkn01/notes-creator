const { v4: uuidv4 } = require("uuid");

const { readDataFromFile, writeDataToFile } = require("../utils/fileReadWrite");

const getNotes = (req, res) => {
  // get all notes from file
  const notes = readDataFromFile("notes");

  // send all notes as response
  return res.json(notes);
};

const createNotes = (req, res) => {
  console.log(req.body);
  // get the payload from req body
  const { name } = req.body;

  // create uuid
  const id = uuidv4();

  // create the note object
  const note = {
    id,
    name,
  };

  // get all notes from file
  const data = readDataFromFile("notes");

  // push new note to notes
  data.notes.push(note);

  // write all notes to file
  writeDataToFile("notes", data);

  // send response
  return res.json({
    message: "Successfully created a new note",
  });
};

const getNote = (req, res) => {
  // get note from req
  const { noteId } = req.params;

  // get all notes from file
  const { notes } = readDataFromFile("notes");

  // find note by noteId
  const note = notes.find((note) => note.id === noteId);

  // return response with note
  return res.json(note);
};

module.exports = {
  getNotes,
  createNotes,
  getNote,
};
