//import express
const express = require("express");

const routes = require("./routes");

//create my express app instance
const app = express();

// declare the PORT
const PORT = 8000;

//register GET method

app.get("/homepage", (req, res) => {
  // return response
  return res.sendFile();
});

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
