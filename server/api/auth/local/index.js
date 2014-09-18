var express = require("express");
var router = express.Router();
var data = require('../../../data');
var hasher = require('../hasher');

var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

function authenticateUser(email, password, next) {
    "use strict";
    data.users.get(email, function (err, user) {
        if (!err && user) {
            var hash = hasher.computeHash(password, user.salt);
            if (hash === user.hashedPassword) {
                next(null, user);
                return;
            }
        }
        next(null, false, {message: "Invalid credentials!!"});
    });
};

passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    authenticateUser
));

// auth/local
router.post('/', function(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        var error = err || info;
        if (error) return res.json(401, error);
        if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

   //     TODO-abhi: send token using jsonwebtoken
        res.json({error: null});
    })(req, res, next)
});

module.exports = router;