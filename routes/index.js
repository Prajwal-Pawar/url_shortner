const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');
const goToPageController = require('../controller/goToPage_controller');

router.get('/', homeController.home);

router.use('/shortUrls', require('./shortUrl'));

router.use('/:shortUrl', goToPageController.goTo);

module.exports = router;