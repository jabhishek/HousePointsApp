'use strict';

describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('housePointApp'));

    var LoginCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;

        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl');
    }));

    it('email and password to be defined', function () {
        expect(LoginCtrl.user.email).toBeDefined();
        expect(LoginCtrl.user.password).toBeDefined();
    });

    it('should initialize the user ID and password correctly', function () {
        expect(LoginCtrl.user.email).toBe("");
        expect(LoginCtrl.user.password).toBe("");
    });

    it('login should set the value of formSubmitted to true', function () {
        expect(LoginCtrl.isFormSubmitted).toBe(false);
        LoginCtrl.login({});
        expect(LoginCtrl.isFormSubmitted).toBe(true);
    });

});