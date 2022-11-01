const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/all', usersController.users_get);

router.post('/create', usersController.user_create);

router.post('/login', usersController.user_authenticate);
  
router.get('/details/:email', usersController.user_details);
  
router.post('/modify/:email', usersController.user_modify);

module.exports = router;