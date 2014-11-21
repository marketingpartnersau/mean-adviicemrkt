'use strict';

angular.module('adviicemrktApp')
  .directive('professionBlock', function (Profession) {
    return {
      templateUrl: 'app/directives/profession-block/profession-block.html',
      restrict: 'EA',
      scope: {
      	profession: '=',
      	professions: '='
      },
      link: function (scope, element, attrs) {

        var profession = new Profession(scope.profession);

      	scope.deleteProfession = function(){
  	  		profession.$delete()
  	  		.then(function(result){
  	  			_.remove(scope.professions, function(obj){
  	  				return obj._id === scope.profession._id;
  	  			});

            element.remove();
  	  		});
  	  	};

        scope.updateProfession = function(){
          profession.$update()
          .then(function(result){
            scope.profession = result;
          })
        };

      }
    };
  });