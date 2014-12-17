'use strict';

angular.module('phraseApp')
  .controller('TutorialCtrl', function ($rootScope, $scope, page) {
    $rootScope.pageName = 'tutorial';

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

    $scope.tutorialNext = function () {
      console.log('SWIPE');

      $rootScope.go('tutorial/2');
    }
  });
