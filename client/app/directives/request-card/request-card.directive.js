'use strict';

angular.module('adviicemrktApp')
  .directive('requestCard', function ($modal, Pitch) {
    return {
      templateUrl: 'app/directives/request-card/request-card.html',
      restrict: 'EA',
      scope: {
      	request: '='
      },
      link: function (scope, element, attrs) {
        scope.pitchThisRequest = function(){
          $modal.open({
            templateUrl: 'app/directives/request-card/pitch-modal.html',
            resolve: {
              request: function(){
                return scope.request;
              }
            },
            controller: 'PitchModalCtrl'
          }).result.then(function(result){
            // After pitched or cancelled
          });
        };
      }
    };
  })

  .controller('PitchModalCtrl', function($scope){
    // modal logic here 
    // $scope.request available
  });