'use strict';

angular.module('phraseApp')
  .controller('SettingsCtrl', function ($scope, settings) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.Categories = settings.options('Category');
    $scope.Timers = settings.options('Timer');

    // This will enable our correct option to be selected based on localStorage
    // TODO: There needs to be a better way to do this
    $scope.Category = $scope.Categories[settings.get('Category').id];
    $scope.Timer = $scope.Timers[settings.get('Timer').id];

    $scope.saveSetting = function( key ) {
      settings.set(key, $scope[key]);
    };
  });
