const express = require('express');
const router = express.Router();
const promo = require('../controllers/promo');

router.get('/promo', promo.getPromo);
router.post('/promo', promo.addPromo);
router.delete('/promo', promo.deletePromo);

module.exports = router;
