'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($rootScope, $scope, score, page, localStorageService, geturl, settings) {
    $rootScope.pageName = page.get();

    // Get current categories so we can change between rounds
    $scope.Categories = settings.options('Category');

    $scope.openUrl = function(url, rootUrl) {
      geturl.get(url, rootUrl);
    };

    $scope.saveScore = function( key, direction ) {
      score.set(key, direction);
    };

    $scope.roundWords = localStorageService.get('roundWords');

    $scope.teams = score.all();

  });
