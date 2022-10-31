const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contractsController');

router.get('/create', contractsController.contract_create);
  
router.get('/:id', contractsController.contract_details);
  
router.delete('/:id', contractsController.contract_delete);

module.exports = router;