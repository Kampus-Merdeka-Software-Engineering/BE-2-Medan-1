const express = require('express');
const router = express.Router();
const destination = require('../controllers/destination');

router.get('/destination', destination.getDestination);
router.post('/destination', destination.addDestination);
router.delete('/destination', destination.deleteDestination);

module.exports = router;
