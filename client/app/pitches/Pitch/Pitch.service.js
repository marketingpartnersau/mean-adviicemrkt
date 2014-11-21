'use strict';

angular.module('adviicemrktApp')
  .factory('Pitch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
