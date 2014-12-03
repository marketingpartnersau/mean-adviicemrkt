'use strict';

angular.module('adviicemrktApp')
  .controller('RequestCtrl', function ($scope) {
    $scope.message = 'Hello';
  })

  .controller('RequestAllCtrl', function($scope, $http, $stateParams, Auth, Global, Request){

    $scope.auth = Auth;
    var requests = new Request();

    if(Global.hasOwnProperty('selectedProfession')){
      profession = Global.selectedProfession;
      requests.$query({ profession: profession._id }).then(setScopeRequests)
    } else {
      requests.$index().then(setScopeRequests);
    }

    var setScopeRequests = function(requests){
      console.log(requests);
      $scope.requests = requests;
    };

  })

  .controller('RequestViewCtrl', function($scope){
    
  })

  .controller('RequestDescriptionCtrl', function($scope, $state, $stateParams, Global, Auth, Request){

    console.log(Global);

    if(Global.pendingRequest.hasOwnProperty('content') || Global.pendingRequest.hasOwnProperty('type')){
      $scope.query = Global.pendingRequest; 
    }

  	$scope.submitRequest = function(){
  		if(Auth.isLoggedIn()) {
			var request = new Request($scope.query);
      request.type = $scope.query.type._id;
      request.user = Auth.getCurrentUser()._id;
      request.$save();
  			$state.go('request.complete');
  		} else {
        Global.pendingRequest = $scope.query;
        Global.predictedUserType = 'client';
        $state.go('login');
      }
  	};

  })

  .controller('RequestIndustryCtrl', function($scope, Global, Profession){

    var profession = new Profession();
    profession.$index().then(function(result){
      $scope.professions = result.contents;
    })

    $scope.viewRequests = function(profession){
      Global.selectedProfession = profession;
      $state.go('request.all');
    };
  });
