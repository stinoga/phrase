'use strict';

angular.module('phraseApp')
  .controller('ScoreCtrl', function ($rootScope, $scope, $filter, score, page, localStorageService, geturl, settings) {
    $rootScope.pageName = page.get();

    var totalWordTime = 0,
        finalWordTime = 0;

    // Get current categories so we can change between rounds
    $scope.Categories = settings.options('Category');
    $scope.gameTime = $filter('seconds')(settings.get('TimerLength').name);

    $scope.openUrl = function(url, rootUrl) {
      geturl.get(url, rootUrl);
    };

    $scope.saveScore = function(key, direction) {
      score.set(key, direction);
    };

    $scope.roundWords = localStorageService.get('roundWords');
    $scope.superlatives = localStorageService.get('superlatives') || {
      fastest: {
        name: null,
        time: 999
      },
      slowest: {
        name: null,
        time: 0
      }
    };

    $scope.wordTimeDisplay = function(wordTime) {
      var roundedNumber = $filter('number')(wordTime, 2) + 's';

      return roundedNumber;
    };

    angular.forEach($scope.roundWords, function (word) {
      if (word.time < $scope.superlatives.fastest.time && word.finished === true) {
        $scope.superlatives.fastest = word;
      }

      if (word.time > $scope.superlatives.slowest.time) {
        $scope.superlatives.slowest = word;
      }
    });

    localStorageService.set('superlatives', $scope.superlatives);

    $scope.teams = score.all();

  });
