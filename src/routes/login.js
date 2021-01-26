var express = require('express')
var router = express.Router()
var loginControler = require('../controllers/login');

router.post('', loginControler.login);

module.exports = router