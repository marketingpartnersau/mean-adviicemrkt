'use strict';

angular.module('adviicemrktApp')
  .factory('Profession', function ($http, $q) {

    var API = '/api/professions';
    
    var Profession = function(data){
      var self = this;

      _.each(data, function(v, k){
        self[k] = v;
      });

    };

    Profession.prototype.$save = function(){
      var def = $q.defer();
      var self = this;

      $http.post(API, self)
      .success(function(result){
        def.resolve(result);
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    Profession.prototype.$delete = function(){
      var def = $q.defer();

      $http.delete(API + '/' + this._id)
      .success(function(result){
        def.resolve(result);
        console.log(result);
      }, function(err){
        def.reject(err);
      })

      return def.promise;
    };

    Profession.prototype.$index = function(){
      var def = $q.defer();
      var self = this;

      $http.get(API)
      .success(function(result){
        def.resolve(result);
        self = result;
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    Profession.prototype.$get = function(id){
      var def = $q.defer();
      var self = this;

      $http.get(API + id)
      .success(function(result){
        def.resolve(result);
        self = result;
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    return Profession;


  });
