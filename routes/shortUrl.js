const express = require('express');

const router = express.Router();

const shortURLController = require('../controller/shortUrl_controller');

router.post('/', shortURLController.shrink);

module.exports = router;

