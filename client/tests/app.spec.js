'use strict';

describe('module: app', function () {

    // load the controller's module
    var module;

    // Initialize the controller and a mock scope
    beforeEach(inject(function () {
        module = angular.module('housePointApp');
    }));

    it("should be registered", function() {
        expect(module).not.toEqual(null);
    });
    describe('dependencies', function () {
        var deps;
        var hasModule = function(m) {
            return deps.indexOf(m) > -1;
        };
        beforeEach(function() {
            deps = module.value('housePointApp').requires;
        });

        it("should have ngCookies as a dependency", function() {
            expect(hasModule('ngCookies')).toBe(true);
        });
        it("should have ngResource as a dependency", function() {
            expect(hasModule('ngResource')).toBe(true);
        });
        it("should have ngSanitize as a dependency", function() {
            expect(hasModule('ngSanitize')).toBe(true);
        });
        it("should have ui.router as a dependency", function() {
            expect(hasModule('ui.router')).toBe(true);
        });

    });

});


/*

'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'*/


describe('routes', function () {
    var location, state;
    beforeEach(module('housePointApp'));
    beforeEach(inject(function(_$location_, _$state_) {
        location = _$location_;
        state = _$state_;
    }));

    it("should go to the / on state change to main", function() {
        expect(state.href('main')).toEqual('/');
    });

    it("should go to the /login on state change to login", function() {
        expect(state.href('login')).toEqual('/login');
    });
});