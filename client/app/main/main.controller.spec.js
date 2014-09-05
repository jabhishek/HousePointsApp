'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('housePointApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl');
  }));

  it('should initialize the user ID and password correctly', function () {
    expect(MainCtrl.user.email).toBe("");
    expect(MainCtrl.user.password).toBe("");
  });
});