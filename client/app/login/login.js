(function (app) {

    'use strict';

    app.config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl as vm'
            });
    });
})(angular.module('housePointApp'));