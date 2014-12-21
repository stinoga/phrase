'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, settings, page, score, localStorageService) {
    $rootScope.pageName = page.get();

    $scope.teams = score.all();
    $rootScope.continueGame = false;

    $scope.newGame = function() {
      // Clear current scores and team info for a brand new game
      score.clear(true);
      localStorageService.remove('superlatives');

      $rootScope.go('/start');
    };

    // Watch for scope changes
    // If our score is above zero or the user has created a team name, let's show the continue game button
    $scope.$watch(function () {
      var totalScore = parseInt($scope.teams[0].score) + parseInt($scope.teams[1].score),
          hasTeamNames = $scope.teams[0].name && $scope.teams[1].name;

      if (totalScore > 0 || hasTeamNames !== '') {
        $rootScope.continueGame = true;
      } else {
        $rootScope.continueGame = false;
      }
    });

    // These will handle storing our default setting values if they
    // haven't been stored in localStorage yet
    $scope.Category = settings.get('Category').id;
    $scope.Timer = settings.get('Timer').id;
    $scope.TimerLength = settings.get('TimerLength').id;
  });
