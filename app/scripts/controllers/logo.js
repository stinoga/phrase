'use strict';

angular.module('phraseApp')
  .controller('LogoCtrl', function ($scope, $rootScope) {
    $scope.logoText = 'Pop Phrase';
    $scope.logoLink = '/';

    // Update the logo link based on whether we are in-game or not
    $scope.$on('in-game', function (argument) {
      $scope.logoLink = '/score';
    });

    $scope.$on('exit-game', function (argument) {
      $scope.logoLink = '/';
    });

    $scope.logoPath = function () {
      // Only link the log if the tutorial is disabled
      if (!$rootScope.tutorial) {
        $rootScope.go($scope.logoLink);
      }
    }
  });
