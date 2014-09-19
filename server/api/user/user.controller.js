(function (users) {

    'use strict';

    var data = require("../../data");

// Get list of users
    users.index = function (req, res) {
        data.users.getAll(function processResults(err, results) {
            res.json({
                err: err,
                users: results
            });
        });
    };

    users.getByEmail = function (req, res) {
        var email = req.params.email;
        data.users.getByEmail(email, function processResults(err, results) {
            res.json({
                err: err,
                user: results
            });
        });
    };

    users.getById = function (req, res) {
        console.log(req.params);
        var id = req.params.id;
            res.json({
                user: id
            });
    };
})(module.exports);