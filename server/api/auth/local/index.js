var express = require("express");
var router = express.Router();

router.post('/', function (req, res, next) {
    var user = req.body;

    res.json({
        err: {},
        data: {}
    });
});


module.exports = router;