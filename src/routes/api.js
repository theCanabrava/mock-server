var express = require('express')
var router = express.Router()
var auth = require('../midlewares/auth');
var apiController = require('../controllers/api');

router.use(auth);

router.use('', apiController.load);

module.exports = router