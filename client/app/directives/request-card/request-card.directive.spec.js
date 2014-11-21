'use strict';

describe('Directive: requestCard', function () {

  // load the directive's module and view
  beforeEach(module('adviicemrktApp'));
  beforeEach(module('app/request-card/request-card.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<request-card></request-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the requestCard directive');
  }));
});