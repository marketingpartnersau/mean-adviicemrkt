'use strict';

describe('Directive: professionBlock', function () {

  // load the directive's module and view
  beforeEach(module('adviicemrktApp'));
  beforeEach(module('app/directives/profession-block/profession-block.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<profession-block></profession-block>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the professionBlock directive');
  }));
});