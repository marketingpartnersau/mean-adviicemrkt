'use strict';

describe('Service: Pitch', function () {

  // load the service's module
  beforeEach(module('adviicemrktApp'));

  // instantiate service
  var Pitch;
  beforeEach(inject(function (_Pitch_) {
    Pitch = _Pitch_;
  }));

  it('should do something', function () {
    expect(!!Pitch).toBe(true);
  });

});
