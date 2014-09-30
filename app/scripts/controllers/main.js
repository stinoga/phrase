'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, $storekit, settings, page, score) {
    $rootScope.pageName = page.get();

    $scope.teams = score.all();
    $scope.continueGame = false;

    $scope.newGame = function() {
      score.clear();
      $location.path('/play');
    };

    // Watch for score changes
    // If our score is above zero, let's show the continue game button
    $scope.$watch(function () {
      var totalScore = parseInt($scope.teams[0].score) + parseInt($scope.teams[1].score);
      if (totalScore > 0) {
        $scope.continueGame = true;
      } else {
        $scope.continueGame = false;
      }
    });

    // These will handle storing our default setting values if they
    // haven't been stored in localStorage yet
    $scope.Category = settings.get('Category').id;
    $scope.Timer = settings.get('Timer').id;
  });
