//import dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes");

//create my express app instance
const app = express();

// declare the PORT
const PORT = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
