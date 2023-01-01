const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/all', companyController.company_get);

router.post('/create', companyController.company_create);
  
router.get('/:id', companyController.company_details);
  
router.delete('/:id', companyController.company_delete);

module.exports = router;