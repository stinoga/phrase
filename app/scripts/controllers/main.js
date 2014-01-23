'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($scope, settings) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // These will handle storing our default setting values if they
    // haven't been stored in localStorage yet
    $scope.Category = settings.get('Category').id;
    $scope.Timer = settings.get('Timer').id;
  });
