// Defining empty array
let users = [];

// GET method function
const getUsers = (req, res) => {
  // Sending user details
  res.send(users);
};

// POST method function
const createUser = (req, res) => {
  // Creating a random name
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  // Pushing it into users array
  users.push({ ...users, text });

  // Displaying that user has been added
  res.send(`User added to the database!`);
};

// Exporting middleware to Route.js
module.exports = {
  getUsers,
  createUser,
};
