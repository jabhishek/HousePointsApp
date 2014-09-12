'use strict';

describe('Service: auth', function () {
    var auth, $httpBackend;
    // load the service's module
    beforeEach(module('housePointApp'));

    // instantiate service
    beforeEach(inject(function (_auth_, _$httpBackend_) {
        auth = _auth_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', function () {
        expect(!!auth).toBe(true);
    });

    it('should have isLoggedIn defined', function () {
        expect(auth.isLoggedIn).toBeDefined();
    });

    it('should have login function defined', function () {
        expect(auth.login).toBeDefined();
        expect(typeof auth.login).toBe('function');
    });


});
