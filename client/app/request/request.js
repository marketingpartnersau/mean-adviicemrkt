'use strict';

angular.module('adviicemrktApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('request', {
        url: '/request',
        abstract: true,
        templateUrl: 'app/request/request.html',
        controller: 'RequestCtrl'
      })

      .state('request.new', {
      	// THIS STATE WILL BE A TAG SELECTION
      	// SIMILAR TO THE HOMEPAGE
      })

      .state('request.description', {
      	url: '/query',
      	templateUrl: 'app/request/views/description.html',
      	controller: 'RequestDescriptionCtrl'
      })

      .state('request.confirm', {
        url: '/confirm',
        templateUrl: 'app/request/views/confirm.html',
        controller: 'RequestDescriptionCtrl'
      })

      .state('request.complete', {
        url: '/done',
        templateUrl: 'app/request/views/complete.html',
        // controller: ''
      })

      .state('request.all', {
        url: '/all',
        templateUrl: 'app/request/views/all.html',
        controller: 'RequestAllCtrl'
      })

      .state('request.industrySelect', {
        url: '/industry',
        templateUrl: 'app/request/views/industries.html',
        controller: 'RequestIndustryCtrl'
      });
  });