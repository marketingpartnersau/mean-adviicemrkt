'use strict';

angular.module('adviicemrktApp')
  .controller('ProfessionsCtrl', function ($scope, Profession) {

    $scope.professions = [];
    $scope.profession = {
      parent: null
    };

  	var professions = new Profession();
  	professions.$index().then(function(result){
      console.log(result);
  		$scope.professions = result;
  	});
    
  	$scope.addProfession = function(){
      console.log($scope.profession);
  		var profession = new Profession($scope.profession);

  		profession.$save()
  		.then(function(newProfession){
  			$scope.professions.push(newProfession);
  			$scope.profession.title = '';
  			$scope.profession.parent = '';
  		});
  	};

  });
