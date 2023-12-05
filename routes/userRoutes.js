const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.get('/users/login', userController.checkConnection);

router.post('/users', userController.addUser);

router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;
