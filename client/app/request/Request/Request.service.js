'use strict';

angular.module('adviicemrktApp')
  .factory('Request', function ($resource) {
    // Service logic
    // ...

    return $resource('/api/request/:id', { id: "@_id" },
      {
        'create':   { method: 'POST' },
        'index':    { method: 'GET', isArray: true },
        'show':     { method: 'GET', isArray: false },
        'update':   { method: 'PUT' },
        'destroy':  { method: 'DELETE' }
      }
    )
  });
