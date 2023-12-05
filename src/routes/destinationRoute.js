const express = require('express');
const router = express.Router();
const destination = require('../controllers/destination');

router.get('/destination', destination.getDestination);
router.post('/destination', destination.addDestination);

module.exports = router;
