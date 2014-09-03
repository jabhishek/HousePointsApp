(function (app) {

    'use strict';

    app.controller('NavbarCtrl', function ($location) {
        var vm = this;
        this.menu = [
            {
                'title': 'Home',
                'link': '/'
            }
        ];

        this.isCollapsed = true;

        this.isActive = function (route) {
            return route === $location.path();
        };
    });
})(angular.module('housePointApp'));