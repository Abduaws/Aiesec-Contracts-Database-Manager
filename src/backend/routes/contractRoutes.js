const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contractsController');

router.get('/all', contractsController.contracts_get);

router.post('/create', contractsController.contract_create);
  
router.get('/:id', contractsController.contract_details);
  
router.delete('/:id', contractsController.contract_delete);

module.exports = router;