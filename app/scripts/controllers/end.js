'use strict';

angular.module('phraseApp')
  .controller('EndCtrl', function ($rootScope, $scope, localStorageService, score, page) {
    $rootScope.pageName = page.get();

    $scope.teams = localStorageService.get('last_game');
    $scope.superlatives = localStorageService.get('last_superlatives');

    $scope.newGame = function() {
      // Clear current scores and team info for a brand new game
      score.clear();
      localStorageService.remove('superlatives');

      $rootScope.go('/start');
    };
  });
