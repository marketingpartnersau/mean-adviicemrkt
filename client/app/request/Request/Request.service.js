'use strict';

angular.module('adviicemrktApp')
  .factory('Request', function ($resource, $http, $q) {
    // return $resource('/api/requests/:id', { id: "@_id" },
    //   {
    //     'create':   { method: 'POST' },
    //     'index':    { method: 'GET', isArray: true }
    //   }
    // );

    var Request = function(data){

      var self = this;

      _.each(data, function(v, k){
        self[k] = v;
      });

    };

    Request.prototype.$get = function(id){
      var def = $q.defer();
      var self = this;

      $http.get('/api/requests/' + id)
      .success(function(result){
        def.resolve(result)
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    Request.prototype.$save = function(){
      var def = $q.defer();
      var self = this;

      $http.post('/api/requests', self)
      .success(function(result){
        def.resolve(result);
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    Request.prototype.$index = function(){
      var def = $q.defer();

      $http.get('/api/requests')
      .success(function(result){
        def.resolve(result);
      }, function(err){
        def.reject(err);
      });

      return def.promise;
    };

    return Request;

    // return {
    //   $index: function(){
    //     var def = $q.defer();

    //     $http.get('/api/request', function (result){
    //       def.resolve(result);
    //     }, function(error){
    //       def.reject(error);
    //     });

    //     return def.promise;
    //   }
    // }
  });
