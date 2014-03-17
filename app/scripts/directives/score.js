'use strict';

angular.module('phraseApp')
  .directive('score', function (score) {

    function scoreFunc(scope, element, attrs) {
      scope.teams = score.all();
      scope.showScore = false;

      scope.$watch(function (argument) {
        var toatalScore = parseInt(scope.teams[0].score) + parseInt(scope.teams[1].score);
        if (toatalScore > 0) {
          scope.showScore = true;
        } else {
          scope.showScore = false;
        }
        console.log(scope.showScore);
      });

    }

    return {
      templateUrl: 'views/directives/score.html',
      restrict: 'E',
      link: scoreFunc
    };
  });
