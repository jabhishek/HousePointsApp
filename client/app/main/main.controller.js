(function (app) {
    'use strict';

    app.controller('MainCtrl', mainController);

    function mainController () {
        /*jshint validthis: true */
        var vm = this;
        vm.message = 'World!!';
    }
})(angular.module('housePointApp'));

