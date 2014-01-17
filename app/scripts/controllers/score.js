'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($scope, $timeout, $location, localStorageService, score) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.teams = score.all();

  });
