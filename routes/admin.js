const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);
//ne izvedemo funkcije, ki smo jo uvozili, pač pa le podamo "referenco"

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

