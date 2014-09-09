'use strict';

angular.module('housePointApp')
    .factory('auth', function () {
        // Service logic
        // ...

        var isLoggedIn = false;

        // Public API here
        return {
            isLoggedIn: isLoggedIn
        };
    });
