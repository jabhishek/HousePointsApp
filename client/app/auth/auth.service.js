(function (app) {
    'use strict';
    app.factory('auth', auth);

    auth.$inject = [];
    function auth() {
        var isLoggedIn = false;

        // Public API here
        return {
            isLoggedIn: isLoggedIn,
            login: login
        };

        function login() {

        }
    }
})(angular.module('housePointApp'));


