var express = require("express");
var router = express.Router();

// auth/local
router.post('/', function (req, res, next) {
    var user = req.body;

    res.json({
        err: {},
        user: {}
    });
});


module.exports = router;