const express = require('express');
const customerController = require('../controllers/mdb_customer_controller');
const router = express.Router(); // Object to create routes

router.get('/', customerController.getCustomers); // When initial route to /customer required (GET), you respond with customerController.getCustomers
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer); // Browser can send petitions with data to server to store
router.delete('/:id', customerController.deleteCustomer);
router.put('/:id', customerController.updateCustomer);

module.exports = router; // Object is exported to be used in other parts within the application