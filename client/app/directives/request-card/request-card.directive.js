'use strict';

angular.module('adviicemrktApp')
  .directive('requestCard', function ($modal, Pitch, Global) {
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

        scope.signupSpecialist = function(request){
          Global.requestPendingPitch = request;
          Global.predictedUserType = 'specialist';
        };
      }
    };
  })

  .controller('PitchModalCtrl', function($scope){
    // modal logic here 
    // $scope.request available
  });