'use strict';

angular.module('phraseApp')
  .controller('PlayCtrl', function ($rootScope, $scope, $location, $timeout, words, timer, page, sound) {
    $rootScope.pageName = page.get();

    var nextCount = 0;

    $rootScope.$broadcast('in-game');

    if ($rootScope.nadaInternet) {
      alert($rootScope.messages.nadaInternet);
      $location.path('/settings');
    }

    document.addEventListener("pause", onPause, false);

    function onPause() {
        $scope.timer.kill();
        $rootScope.$broadcast('exit-game');
        $location.path('/score');
    }

    $scope.reset = function() {
      words.resetWords();
    };

    $scope.reset();

    $scope.next = function() {
      sound.play('whoosh');

      $scope.wordShow = false;

      // Only transition in a word if it's not the first one
      if (nextCount !== 0) {
        $scope.wordTransition = true;
      }

      $scope.previousWord = $scope.word;

      nextCount++;

      words.get(function( word ) {
        $scope.word = word;

        // Animate in words on a short timeout to avoid stepping on the
        // toes of the wordTransition var
        $timeout(function() {
          $scope.wordShow = true;
        }, 10);
      });
    };

    $scope.next();

    function roundOver() {
      $location.path('/score');
    }

    $scope.timer = timer({ done: roundOver });

    $scope.$on('$destroy', function() {
      $rootScope.$broadcast('exit-game');
      $scope.timer.kill();
    });

  });
