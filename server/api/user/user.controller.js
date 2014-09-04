(function (users) {

    'use strict';

    var data = require("../../data");

// Get list of users
    users.index = function (req, res) {
        data.users.get(function processResults(err, results) {
            res.json({
                err: err,
                data: results
            });
        });

    };
})(module.exports);