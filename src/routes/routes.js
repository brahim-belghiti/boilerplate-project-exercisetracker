const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');
const { createAnExercise } = require('../controllers/exerciseContoller');

// users routes
router.post('/users', createUser);
router.get('/users', getUsers);

// exercise routes
router.post('/users/:_id/exercises', createAnExercise);


module.exports = router;