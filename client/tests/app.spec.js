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

describe('routes', function () {
    var location, state, auth, $rootScope;
    beforeEach(module('housePointApp'));
    // TODO-abhi - Replace auth with a mocked version
    beforeEach(inject(function(_$location_, _$state_, _auth_, _$rootScope_, $templateCache) {
        location = _$location_;
        state = _$state_;
        auth = _auth_;
        $rootScope = _$rootScope_;
        $templateCache.put('app/main/main.html', '');
        $templateCache.put('app/login/login.html', '');
    }));

    it("should go to / if state is changed to main", function() {
        expect(state.href('main')).toEqual('/');
    });

    it("should go to /login if state is changed to login", function() {
        expect(state.href('login')).toEqual('/login');
    });

    it("should go to the main state if state is changed to an invalid state and user is logged in", function() {
        auth.isLoggedIn = true;
        state.go('invalidstate');
        $rootScope.$digest();
        expect(state.current.name).toBe('main');
    });

    it("should go to the login if state is changed to an invalid state and user is not logged in", function() {
        auth.isLoggedIn = false;
        state.go('invalidstate');
        $rootScope.$digest();
        expect(state.current.name).toBe('login');
    });

    it("should go to the /login if user not logged in and state is changed to main", function() {
        console.log("should go to the /login if user not logged in and state is changed to main")
        auth.isLoggedIn = false;
        state.go('main');
        $rootScope.$digest();
        expect(state.current.name).toBe('login');
    });
});