'use strict';

angular.module('adviicemrktApp')
  .controller('MainCtrl', function ($scope, $state, Global, Profession) {

    var professions = new Profession();
    professions.$index()
    .then(function(result){
      console.log(result);
      // set ALL categories into scope variable for typeahead
      $scope.search.professions = result.contents;

      // sets the defaults as parent categories
      $scope.search.defaults    = _.filter(result.contents, function(obj){
        return obj.parent === null;
      });

    });

    $scope.search = {
      focus: false,
      choice: '',
      defaults: [],
      professions: []
    };

    $scope.setRequestType = function(profession){
      Global.pendingRequest.type = profession;
      $state.go('request.description', { type : Global.pendingRequest.type });
    };

  });
