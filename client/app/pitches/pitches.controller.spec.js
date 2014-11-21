'use strict';

describe('Controller: PitchesCtrl', function () {

  // load the controller's module
  beforeEach(module('adviicemrktApp'));

  var PitchesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PitchesCtrl = $controller('PitchesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
