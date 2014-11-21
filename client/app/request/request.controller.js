'use strict';

angular.module('adviicemrktApp')
  .controller('RequestCtrl', function ($scope) {
    $scope.message = 'Hello';
  })

  .controller('RequestAllCtrl', function($scope, $http, $stateParams, Request){

    var requests = new Request();

    requests.$index()
    .then(function(results){
      console.log(results);
      $scope.requests = results;
    });

  })

  .controller('RequestDescriptionCtrl', function($scope, $state, $stateParams, Global, Auth, Request){

    console.log(Global.pendingRequest);

    if(Global.pendingRequest.hasOwnProperty('content')){
      $scope.query = Global.pendingRequest;
      
    }
    else if(Global.pendingRequest.hasOwnProperty('type')){
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
        $state.go('login');

      }
  	};

  })

  .controller('RequestIndustryCtrl', function($scope){
    $scope.industries = [
      { name: 'Real Estate', slug: 'real-estate' },
      { name: 'Mortgage Lending', slug: 'mortgage' },
      { name: 'Accounting', slug: 'accounting' },
      { name: 'Financial Planning', slug: 'financial' },
      { name: 'Legal', slug: 'legal' }
    ];
  });
