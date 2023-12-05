const express = require('express');
const router = express.Router();
const booking = require('../controllers/booking');

router.get('/booking', booking.getBooking);
router.post('/booking', booking.addBooking);

module.exports = router;
