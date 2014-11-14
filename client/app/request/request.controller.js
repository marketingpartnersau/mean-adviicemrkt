'use strict';

angular.module('adviicemrktApp')
  .controller('RequestCtrl', function ($scope) {
    $scope.message = 'Hello';
  })

  .controller('RequestAllCtrl', function($scope, Request){
    var request = new Request();
    
    request.$index()
    .then(function(requests){
      $scope.requests = requests;
      console.log(requests);
    });

  })

  .controller('RequestDescriptionCtrl', function($scope, $state, $stateParams, Global, Auth, Request){

    if(Global.pendingRequest.hasOwnProperty('content')){
      $scope.query = Global.pendingRequest;
    }
    else if($stateParams.type){
      $scope.query = {
        type: $stateParams.type
      };
    }

  	$scope.submitRequest = function(){
  		if(Auth.isLoggedIn()) {

  			var request = new Request($scope.query);
        console.log(request);
            request.$save();

  			$state.go('request.complete');

  		} else {

        Global.pendingRequest = $scope.query;
        $state.go('login');

      }
  	};

  });
