'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($rootScope, $scope, score, page, localStorageService) {
    $rootScope.pageName = page.get();

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.roundWords = localStorageService.get('roundWords');

    $scope.teams = score.all();

  });
