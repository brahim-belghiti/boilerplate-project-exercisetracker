const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

// users routes
router.post('/users', createUser);
router.get('/users', getUsers);


module.exports = router;