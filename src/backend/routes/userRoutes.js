const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/create', usersController.user_create);
  
router.get('/:id', usersController.user_details);
  
router.delete('/:id', usersController.user_delete);

module.exports = router;