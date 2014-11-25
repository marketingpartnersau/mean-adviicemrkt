'use strict';

angular.module('adviicemrktApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('professions', {
        url: '/professions',
        templateUrl: 'app/professions/professions.html',
        controller: 'ProfessionsCtrl',
        // authenticate: true
      });
  });