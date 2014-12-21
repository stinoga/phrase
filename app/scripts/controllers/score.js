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

    angular.forEach($scope.roundWords, function (word) {
      // Calculate the total word time, minus the final word, who's time is set to 999
      if (word.time !== 999) {
        totalWordTime = totalWordTime + word.time;
      };

      if (word.time < $scope.superlatives.fastest.time) {
        $scope.superlatives.fastest = word;
      }

      if (word.time > $scope.superlatives.slowest.time) {
        // If it's the last word, set the correct time to makes sure it's not the slowest.
        // The last word can't be the fastest, as it was never finished.
        if (word.time === 999) {
          finalWordTime = $scope.gameTime - totalWordTime;

          console.log(finalWordTime);

          if (finalWordTime > $scope.superlatives.slowest.time) {
            $scope.superlatives.slowest.time = finalWordTime;
            $scope.superlatives.slowest.name = word.name;
          }
        } else {
          $scope.superlatives.slowest = word;
        }
      }
    });

    localStorageService.set('superlatives', $scope.superlatives);

    $scope.teams = score.all();

  });
