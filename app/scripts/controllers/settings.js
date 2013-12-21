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

    $scope.Category = settings.get('Category');
    $scope.Timer = settings.get('Timer');

    $scope.saveSetting = function( key ) {
      settings.set(key, $scope[key]);
    };
  });
