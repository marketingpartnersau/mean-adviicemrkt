'use strict';

describe('Service: Profession', function () {

  // load the service's module
  beforeEach(module('adviicemrktApp'));

  // instantiate service
  var Profession;
  beforeEach(inject(function (_Profession_) {
    Profession = _Profession_;
  }));

  it('should do something', function () {
    expect(!!Profession).toBe(true);
  });

});
