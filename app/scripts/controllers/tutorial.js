'use strict';

angular.module('phraseApp')
  .controller('TutorialCtrl', function ($rootScope, $scope, $routeParams, page, $timeout) {
    $rootScope.pageName = 'tutorial';

    $scope.page = parseInt($routeParams.page, 10);
    $rootScope.nextPage = $scope.page + 1;

    $scope.timeLeft = 3;

    // SVG configs
    $scope.happyFace = {
      eyes: 'open',
      mouth: 'happy'
    };

    $scope.sadFace = {
      eyes: 'open',
      mouth: 'sad'
    };

    $scope.playerFace = {
      eyes: 'open',
      mouth: 'really_happy'
    };

    $scope.winFace = {
      eyes: 'open',
      mouth: 'really_happy',
      hat: 'crown'
    };

    function countdown() {
      $scope.timeLeft--;

      if ($scope.timeLeft > 0) {
        $timeout(countdown, 1000);
      }
    }

    $scope.$watch('page', function(page) {
      if (page == 7) {
        countdown();
      }
    });

  });
