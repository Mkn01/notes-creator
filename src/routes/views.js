const path = require("path");

renderLandingPage = (req, res) => {
  //get file path
  const filePath = path.join(__dirname, "../../public/index.html");
  // send file
  return res.sendFile(filePath);
};

renderNotesPage = (req, res) => {
  //get file path
  const filePath = path.join(__dirname, "../../public/notes.html");
  //send file
  return res.sendFile(filePath);
};

module.exports = {
  renderLandingPage,
  renderNotesPage,
};
