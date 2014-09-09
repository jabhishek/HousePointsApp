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
    }).run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {
                console.log('$stateChangeStart to ' + toState.name);
            });

        $rootScope.$on('$stateNotFound',
            function (event, unfoundState/*, fromState, fromParams*/) {
                console.log('$stateNotFound: unfoundState ' + unfoundState.to);
                event.preventDefault();
            });

        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                console.log('$stateChangeError: ' + error);
            });

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState/*, fromParams*/) {
                console.log('$stateChangeSuccess to ' + toState.name + ' from ' + fromState.name);
            });
    });
})();