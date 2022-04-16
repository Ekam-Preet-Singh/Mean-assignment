let users = [];

const getUsers = (req, res) => {
  res.send(users);
};

const createUser = (req, res) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  users.push({ ...users, text });

  res.send(`User added to the database!`);
};

module.exports = {
  getUsers,
  createUser,
};
