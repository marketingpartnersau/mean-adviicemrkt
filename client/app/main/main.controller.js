'use strict';

angular.module('adviicemrktApp')
  .controller('MainCtrl', function ($scope, $state, Global, Profession) {

    $scope.$state = $state;
    $scope.global = Global;

    var professions = new Profession();
    professions.$index()
    .then(function(result){
      $scope.search.professions = result;
      $scope.search.defaults    = _.filter(result, function(obj){
        return obj.parent === null;
      });
    });

    $scope.search = {
      focus: false,
      choice: '',
      defaults: [],
      professions: []
    };

    $scope.setRequestType = function(type){
      Global.pendingRequest.type = type;
      $state.go('request.description');
    };

    $scope.onSelect = function(){
      $state.go('request.description', { type: $scope.choice });
    };

  });
