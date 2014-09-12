(function () {

    'use strict';

    describe('module: app', function () {

        // load the controller's module
        var module;

        // Initialize the controller and a mock scope
        beforeEach(inject(function () {
            module = angular.module('housePointApp');
        }));
        it("should be registered", function () {
            expect(module).not.toEqual(null);
        });
        describe('dependencies', function () {
            var deps;
            var hasModule = function (m) {
                return deps.indexOf(m) > -1;
            };
            beforeEach(function () {
                deps = module.value('housePointApp').requires;
            });

            it("should have ngCookies as a dependency", function () {
                expect(hasModule('ngCookies')).toBe(true);
            });
            it("should have ngResource as a dependency", function () {
                expect(hasModule('ngResource')).toBe(true);
            });
            it("should have ngSanitize as a dependency", function () {
                expect(hasModule('ngSanitize')).toBe(true);
            });
            it("should have ui.router as a dependency", function () {
                expect(hasModule('ui.router')).toBe(true);
            });

        });

    });

    describe('routes', function () {
        var state;
        beforeEach(module('housePointApp'));
        beforeEach(inject(function (_$state_) {
            state = _$state_;
        }));

        it("should go to / if state is changed to main", function () {
            expect(state.href('main')).toEqual('/');
        });

        it("should go to /login if state is changed to login", function () {
            expect(state.href('login')).toEqual('/login');
        });
    });

    describe('routes - user logged in', function () {
        var state, $rootScope, $timeout;
        beforeEach(module('housePointApp', function ($provide) {
            return hpTests.MockHelper.getServiceMock($provide, 'auth', {
                property: 'isLoggedIn',
                value: function () {
                    return true;
                }
            });
        }));

        beforeEach(inject(function (_$state_, _$rootScope_, $templateCache, _$timeout_) {
            state = _$state_;
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            $templateCache.put('app/main/main.html', '');
            $templateCache.put('app/login/login.html', '');
        }));

        it("should go to the main state if state is changed to an invalid state and user is logged in", function () {
            state.go('invalidstate');
            $rootScope.$digest();
            expect(state.current.name).toBe('main');
        });
    });

    describe(' routes - user not logged in', function () {
        var state, $rootScope, $timeout;

        beforeEach(module('housePointApp', function ($provide) {
            return hpTests.MockHelper.getServiceMock($provide, 'auth', {
                property: 'isLoggedIn',
                value: function () {
                    return false;
                }
            });
        }));

        beforeEach(inject(function (_$state_, _$rootScope_, $templateCache, _$timeout_) {
            state = _$state_;
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            $templateCache.put('app/main/main.html', '');
            $templateCache.put('app/login/login.html', '');
        }));

        it("should go to /login if state is changed to an invalid state", function () {
            state.go('invalidstate');
            $rootScope.$digest();
            $timeout.flush();
            expect(state.current.name).toBe('login');
        });

        it(" - should go to /login if state is changed to main", function () {
            state.go('main');
            $rootScope.$digest();
            $timeout.flush();
            expect(state.current.name).toBe('login');
        });
    });
})();