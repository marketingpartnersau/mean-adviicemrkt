'use strict';

angular.module('adviicemrktApp')
  .controller('SignupCtrl', function ($scope, Auth, Global, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    var role;

    console.log(Global);

    if(angular.isDefined(Global.predictedUserType)){
      role = predictedUserType;
    } else {
      role = 'client';
    }

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          role: role
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
