const db = require('../db/database.json');
const User = require('../models/User');

class UserService {

  static getAllUsers() {
    return db.users;
  }

  static getUserById(userId) {
    const userData = db.users.find(user => user.id === userId);
    if (userData) {
      return userData;
    } else {
      console.log("Utilisateur non trouvé");
      return null; 
    }
  }

  static addUser(newUserData) {
    const newUser = new User(newUserData.id, newUserData.email, newUserData.userName, newUserData.password);
    db.users.push(newUser);
    console.log("Utilisateur ajouté");
    return newUser;
  }

  static updateUser(userId, updatedUserData) {

    const userIndex = db.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      db.users[userIndex] = { ...db.users[userIndex], ...updatedUserData };
      return true; 
    } else {
      return false;
    }
  }

  static deleteUser(userId) {
    const userIndex = db.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      db.users.splice(userIndex, 1);
      return true; 
    } else {
      return false;
    }
  }

  static checkLoginAndPassword(userName,password){
    const userData = db.users.find(user => user.userName === userName && user.password === password);
    if (userData) {
        console.log("Couple login/password OK")
      return userData;
    } else {
      console.log("Utilisateur non trouvé");
      return null; 
    }
  }
}

module.exports = UserService;
