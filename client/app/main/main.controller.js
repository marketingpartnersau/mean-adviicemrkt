'use strict';

angular.module('adviicemrktApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.search = {
      focus: false,
      choice: '',
      defaults: [
        { label: 'I need Real Estate advice', value: 'real-estate' },
        { label: 'I need Mortage advice', value: 'mortgage' },
        { label: 'I need Legal advice', value: 'legal' },
        { label: 'I need an Accountant', value: 'accounting' },
        { label: 'I need a Financial Planner', value: 'financial-planner' }
      ],
      results: [
        { label: 'I need Real Estate advice', value: 'real-estate' },
        { label: 'I need Mortage advice', value: 'mortgage' },
        { label: 'I need Legal advice', value: 'legal' },
        { label: 'I need an Accountant', value: 'accounting' },
        { label: 'I need a Financial Planner', value: 'financial-planner' }
      ]
    };

    $scope.onSelect = function(){
      $state.go('request.description', { type: $scope.choice });
    };

  });
