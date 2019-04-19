const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company_controller');

router.get('/', companyController.index);

module.exports = router;
