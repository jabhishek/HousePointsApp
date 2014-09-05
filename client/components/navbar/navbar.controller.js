(function (app) {

    'use strict';

    app.controller('NavbarCtrl', function ($location) {
        var vm = this;
        vm.menu = [
            {
                'title': 'Home',
                'link': '/'
            }
        ];

        vm.isCollapsed = true;

        vm.isActive = function (route) {
            return route === $location.path();
        };
    });
})(angular.module('housePointApp'));