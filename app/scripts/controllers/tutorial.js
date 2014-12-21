'use strict';

angular.module('phraseApp')
  .controller('TutorialCtrl', function ($rootScope, $scope, $routeParams, page) {
    $rootScope.pageName = 'tutorial';

    $scope.page = parseInt($routeParams.page, 10);
    $rootScope.nextPage = $scope.page + 1;

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
  });
