'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($rootScope, $scope, score, page, localStorageService, geturl) {
    $rootScope.pageName = page.get();

    $scope.openUrl = function(url, rootUrl) {
      geturl.get(url, rootUrl);
    };

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.roundWords = localStorageService.get('roundWords');

    $scope.teams = score.all();

  });
