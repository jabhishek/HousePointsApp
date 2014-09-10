(function (app) {

    'use strict';

    app.controller('LoginCtrl', loginController);

    loginController.$inject = [];

    function loginController () {
        /*jshint validthis: true */
        var vm = this;
        vm.isFormSubmitted = false;
        vm.user = {
            email: '', password: ''
        };

        vm.login = login;
        init();

        function init() {

        }

        function login() {
            vm.isFormSubmitted = true;
        }
    }


})(angular.module('housePointApp'));