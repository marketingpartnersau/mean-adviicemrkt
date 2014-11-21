'use strict';

angular.module('adviicemrktApp')
  .directive('navBar', function (Auth) {
    return {
      templateUrl: 'app/directives/nav-bar/nav-bar.html',
      restrict: 'EA',
      replace: true,
      link: function (scope, element, attrs) {
      	scope.auth = Auth;
      }
    };
  });