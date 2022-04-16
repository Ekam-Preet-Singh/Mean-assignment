// Initialzing modules
const express = require("express");
const app = express();
// Setting PORT
const PORT = 3000;
// Requiring routes from Route.js from routes folder
const user = require("./routes/Route");

// Defining Home Route
app.get("/", (req, res) => res.send("Welcome to the Home Page"));

// Defining user route
app.use("/users", user);

// Starting app on  http://localhost:3000
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
