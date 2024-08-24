const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getDemohtml } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/demohtml', getDemohtml);

module.exports = router;