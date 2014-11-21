'use strict';

angular.module('adviicemrktApp')
  .controller('ProfessionsCtrl', function ($scope, Profession) {

  	var professions = new Profession();
  	professions.$index().then(function(result){
  		$scope.professions = result;
  	});
    
  	$scope.addProfession = function(){

  		var profession = new Profession($scope.profession);

  		profession.$save()
  		.then(function(newProfession){
  			$scope.professions.push(newProfession);
  			$scope.profession.title = '';
  			$scope.profession.parent = '';
  		});
  	};

  });
