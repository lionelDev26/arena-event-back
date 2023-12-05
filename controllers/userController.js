const userService = require("../services/UserService");

exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userService.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "utilisateur non trouvé " });
  }
};

exports.addUser = (req, res) => {
  const newUserData = req.body;
  const newUser = userService.addUser(newUserData);

  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUserData = req.body;

  const updated = userService.updateUser(userId, updatedUserData);

  if (updated) {
    res.json({ success: true, message: "utilisateur mis a jour" });
  } else {
    res.status(404).json({ error: "utilisateur non trouvé" });
  }
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const deleted = userService.deleteUser(userId);

  if (deleted) {
    res.json({ success: true, message: "utilisateur supprimé" });
  } else {
    res.status(404).json({ error: "utilisateur non trouvé" });
  }
};

exports.checkConnection = (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

  const user = userService.checkLoginAndPassword(userName,password);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "userName ou password incorrecte" });
  }
};
