'use strict';

angular.module('phraseApp')
  .controller('StartCtrl', function ($rootScope, $scope, $location, $timeout, page, settings, score) {
    $rootScope.pageName = page.get();

    $scope.focusForm = false;

    // Names from any previous teams
    $scope.teamsCache = score.all();

    $scope.startTeams = [
      $scope.teamsCache[0].name,
      $scope.teamsCache[1].name
    ];

    $timeout(function() {
      $scope.focusForm = !$rootScope.continueGame;
    }, 600);

    // Get current categories so we can change between rounds
    $scope.Categories = settings.options('Category');

    $scope.goPlay = function () {
      angular.forEach($scope.startTeams, function (teamName, key) {
        var finalName = teamName;

        // Set a default team name if null
        if (!/\S/.test(teamName)) {
          finalName = 'Team ' + (key + 1);
        }

        score.setTeam(key + 1, finalName);
      });

      $location.path('/play');
    };
  });
