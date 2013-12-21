'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($scope, $timeout, $location, settings, localStorageService, score) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // These scoped variables give us access to the settings service
    $scope.Categories = settings.options('Category');
    $scope.Category = settings.get('Category');

    $scope.saveSetting = function( key ) {
      settings.set(key, $scope[key]);
    };

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.teams = score.all();

  });
