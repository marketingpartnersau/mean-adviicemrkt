'use strict';

angular.module('adviicemrktApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pitches', {
        url: '/pitches',
        templateUrl: 'app/pitches/pitches.html',
        controller: 'PitchesCtrl'
      });
  });