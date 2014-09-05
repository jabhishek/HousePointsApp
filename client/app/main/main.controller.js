(function (app) {

    'use strict';

    app.controller('MainCtrl', function () {
        var vm = this;
        vm.user = {
            email: '', password: ''
        };
    });
})(angular.module('housePointApp'));