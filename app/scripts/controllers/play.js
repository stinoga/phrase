'use strict';

angular.module('phraseApp')
  .controller('PlayCtrl', function ($scope, $location, words, timer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
