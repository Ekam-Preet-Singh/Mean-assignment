// Initialzing modules
const express = require("express");
const path = require("path");
const app = express();
// Setting PORT
const port = 3000;
// Setting EJS as the Express app view engine.
app.set("view engine", "ejs");

// Demo posts
const posts = [
  { title: "Title 1", body: "Body 1" },
  { title: "Title 2", body: "Body 2" },
  { title: "Title 3", body: "Body 3" },
  { title: "Title 4", body: "Body 4" },
];

app.get("/", (req, res) => {
  // Calling the render method on the response object
  res.render("pages/index", {
    // By default, Express will look inside of a views folder when resolving the template files
    // Sends back the rendered HTML string to the client
    articles: posts,
  });
});

// Starting app on  http://localhost:3000
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
