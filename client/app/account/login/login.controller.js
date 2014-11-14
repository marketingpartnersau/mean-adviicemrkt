'use strict';

angular.module('adviicemrktApp')
  .controller('LoginCtrl', function ($scope, Auth, $state, $window, Global) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          if(Global.pendingRequest.hasOwnProperty('content')){
            $state.go('request.confirm');
          } else {
            $state.go('main');
          }
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
