'use strict';

angular.module('adviicemrktApp')
  .factory('Pitch', function ($http, $q) {
    
    var API = '/api/pitches';

    var Pitch = function(data){
      var self = this;

      _.each(data, function(v, k){
        self[k] = v;
      });
    };

    Pitch.prototype.$create = function(){
      var def = $q.defer();
      var self = this;

      $http.post(API, self)
      .then(function(result){
        def.resolve(result);
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    return Pitch;

  });
