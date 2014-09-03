(function (app) {

    'use strict';

    app.controller('MainCtrl', function ($http) {
        var vm = this;
        vm.awesomeThings = [];

        $http.get('/api/things').success(function (awesomeThings) {
            vm.awesomeThings = awesomeThings;
        });

    });
})(angular.module('housePointApp'));