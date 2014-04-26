'use strict';

angular.module('phraseApp')
  .controller('PlayCtrl', function ($rootScope, $scope, $location, words, timer, page) {
    $rootScope.pageName = page.get();

    if ($rootScope.nadaInternet) {
      alert($rootScope.messages.nadaInternet);
      $location.path('/settings');
    }

    $scope.reset = function() {
      words.resetWords();
    };

    $scope.reset();

    $scope.next = function() {
      words.get(function( word ) {
        $scope.word = word;
      });
    };

    $scope.next();

    function roundOver() {
      $location.path('/score');
    }

    $scope.timer = timer({ done: roundOver });

    $scope.$on('$destroy', function() {
      $scope.timer.kill();
    });

  });
