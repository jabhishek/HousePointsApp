
'use strict';

var express = require('express');
var local = require('./local');

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;