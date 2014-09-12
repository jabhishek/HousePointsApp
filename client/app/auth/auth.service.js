(function (app) {
    'use strict';
    app.factory('auth', auth);

    auth.$inject = [];
    function auth() {
        var _isLoggedIn = false;

        // Public API here
        return {
            isLoggedIn: isLoggedIn,
            login: login
        };

        function login() {

        }

        function isLoggedIn() {
            return _isLoggedIn;
        }
    }
})(angular.module('housePointApp'));


