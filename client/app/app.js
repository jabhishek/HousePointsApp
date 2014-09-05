(function () {

    'use strict';

    angular.module('housePointApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router'
    ]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
})();