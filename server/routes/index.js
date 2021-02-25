const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/newsapi', apiRoutes);

module.exports = router;
