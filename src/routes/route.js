const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// router.get('/user/', userController.getAllUsers);
router.get('/user/create-user', userController.createUser);
// Add more routes as needed

module.exports = router;
