// Initialzing modules
const express = require("express");
const path = require("path");
const app = express();
// Setting PORT
const PORT = 3000;

// Defining Home Route and joining it
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Starting app on  http://localhost:3000
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
