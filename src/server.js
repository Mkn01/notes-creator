//import express
const express = require("express");

//create my express app instance
const app = express();

// declare the PORT
const PORT = 4000;

//register GET method

app.get("/homepage", (req, res) => {
  // return response
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
