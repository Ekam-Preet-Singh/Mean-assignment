const express = require("express");
const app = express();

const PORT = 3000;
const user = require("./routes/Route");

app.get("/", (req, res) => res.send("Welcome to the Home Page"));

app.use("/users", user);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
