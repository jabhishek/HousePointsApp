/**
 * Created by ajain on 04/09/2014.
 */
(function (users) {
    "use strict";
    var database = require("./database");

    users.get = function (next) {
        database.getDb(function getDbBack (err, theDb) {
            if (err) {
                next(err);
            } else {
                theDb.users.find().toArray(function sendResultsToCaller(err, results) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

})(module.exports);