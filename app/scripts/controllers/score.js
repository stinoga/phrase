'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($rootScope, $scope, $timeout, $location, score, page) {
    $rootScope.pageName = page.get();

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.teams = score.all();

  });
